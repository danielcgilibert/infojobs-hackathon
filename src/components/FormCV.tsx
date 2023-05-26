'use client'

import { useState } from 'react'
import Uploader from './Uploader'
import ExperienceInputForm from './ExperienceInputForm'
import UserInputForm from './UserInputForm'
export interface Cv {
  name?: string
  phone?: string
  email?: string
  personalDescription?: string
  company?: string
  job?: string
  description?: string
  startingDate?: string
  finishingDate?: string | null
  onCourse?: boolean
  industry?: string | null
  level?: string | null
}

export default function FormCV() {
  const [cvData, setCvData] = useState<Cv[]>([
    {
      name: 'Jaime Sanchez Galvis',
      phone: '+34 722 116 357',
      email: 'jaimesanchezgalvis@gmail.com',
      personalDescription:
        'Soy un ingeniero electrónico especializado en gestión de proyectos, con más de 10 años de experiencia en el mundo online. Desde 2011 he estado trabajando en línea, comenzando como responsable de la expansión de tiendas en línea y luego evolucionando hacia el desarrollo de software Full-Stack. En el ámbito del desarrollo de software, tengo más de 3 años de experiencia en el diseño, desarrollo y mantenimiento de aplicaciones web. Mi enfoque en la calidad del código y la experiencia del usuario me ha llevado a trabajar con tecnologías de vanguardia como React, TypeScript, Node.js, MongoDB y GraphQL.',
    },
    {
      company: 'ACN, Inc.',
      job: 'Independent Business Owner',
      description:
        'Crear organizaciones de distribución comercial, Organizar eventos de formación, Entrenar equipos de ventas',
      startingDate: '2011-01-01',
      finishingDate: '2020-06-01',
      onCourse: false,
      industry: null,
      level: null,
    },
    {
      company: 'Grupo Amarey',
      job: 'Ingeniero de Soporte',
      description:
        'Crear desde cero el departamento de servicio técnico en la compañía, Planeación y ejecución de mantenimientos de dispositivos, Presentación y formación nuevas tecnologia a clientes',
      startingDate: '2008-06-01',
      finishingDate: '2010-06-01',
      onCourse: false,
      industry: null,
      level: null,
    },
    {
      company: 'ACCT',
      job: 'Front Developer',
      description:
        'Trabajo en entorno React + Node, Trabajo en con metodologias agiles canvan, Creacion y mantenimiento de ecommerce, Git, Figma, Sass, Javascrip, typescript, slack, VTEX IO & FastStore',
      startingDate: '2022-02-01',
      finishingDate: '2022-11-01',
      onCourse: false,
      industry: null,
      level: null,
    },
    {
      company: 'Freelancer',
      job: 'Front Developer',
      description:
        'Creación de la web para aumentar productivad del equipo, Creación flyers y folletos publicitarios',
      startingDate: '2020-01-01',
      finishingDate: '2022-01-01',
      onCourse: false,
      industry: null,
      level: null,
    },
    {
      company: 'Try Catch.tv',
      job: 'Team Lead',
      description:
        'Trabajo en entorno React + Node, Trabajo en con metodologias agiles canvan, Creacion y mantenimiento de ecommerce, Liderar un equipo tecnico para el desarrollo web.',
      startingDate: '2023-03-01',
      finishingDate: null,
      onCourse: true,
      industry: null,
      level: null,
    },
  ])

  console.log(cvData)

  return (
    <div className="animate-fade-down animate-once animate-ease-out animate-normal animate-fill-forwards flex flex-col gap-5 w-full">
      <Uploader setCvData={setCvData} />

      {cvData.length > 0 && (
        <form className="flex flex-col border-2 border-gray-200 rounded p-5 bg-white min-w-full animate-fade-down animate-once animate-duration-100 animate-delay-100 animate-ease-linear animate-normal animate-fill-both">
          {cvData.slice(0, 1).map((cv, index) => (
            <UserInputForm key={index} cv={cv} />
          ))}
          {cvData.slice(1, cvData.length - 1).map((cv, index) => (
            <ExperienceInputForm key={index} cv={cv} />
          ))}
        </form>
      )}
    </div>
  )
}
