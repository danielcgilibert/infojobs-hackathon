import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from 'openai'
import { INITIAL_MESSAGES } from '../../../data/initialMessages'
const pdf = require('pdf-extraction')
const openaiToken = process.env.OPENAI_TOKEN ?? ''

const configuration = new Configuration({ apiKey: openaiToken })
const openai = new OpenAIApi(configuration)

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const filePath = path.join(process.cwd(), 'public', file.name)
  await writeFile(filePath, buffer)

  const text = await getTextPDF(filePath)
  console.log(text)

  const jsonPDF = await gpt(text)

  return NextResponse.json({ success: true, data: jsonPDF })
}

const getTextPDF = async (filePath: string) => {
  let dataBuffer = fs.readFileSync(filePath)

  return pdf(dataBuffer).then(function (data: any) {
    return data.text
  })
}

const gpt = async (text: string) => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0,
      messages: [
        ...INITIAL_MESSAGES,
        {
          role: ChatCompletionRequestMessageRoleEnum.User,
          content: text,
        },
      ],
    })
    const data = completion.data.choices[0].message?.content ?? ''

    const jsondata = JSON.parse(data)

    return jsondata
  } catch (error: string | any) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
  }
}
