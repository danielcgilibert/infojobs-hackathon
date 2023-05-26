'use client'
import React, { useState } from 'react'

export default function UserInputForm({ cv }: any) {
  return (
    <div className="flex flex-col gap-1 leading-normal ">
      <div className="border-b-2 py-2 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Nombre
          </label>
          <input
            type="text"
            id="base-input"
            value={cv?.name}
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Email
          </label>
          <input
            type="text"
            id="base-input"
            value={cv?.email}
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 ">
          Description
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full   bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500     "
          placeholder="Leave a comment...">
          {cv?.personalDescription}
        </textarea>
      </div>
    </div>
  )
}
