'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { authenticate } from '../dashboard/lib/actions'



const page = () => {


  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <form action={authenticate} className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-semibold mb-6">Login</h1>
        <div className="mb-4">
          <input type="text" placeholder="Username" name="username" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <input type="password" placeholder="Password" name="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Login</button>
      </form>
      <Link href="/login/register">
        Rgister
      </Link>
    </div>
  )
}

export default page