
import React from 'react'
import Navbar from '../components/navbar'

function page() {
  return (
    <div className='h-screen flex justify-center w-full'>
    <div className='flex justify-center flex-col m-4 p-10 max-w-screen-md '>
    <h1 className='text-2xl font-bold mb-4 p-4 text-blue-700 '>
            Welcome to Static page
        </h1>

        <p className='text-lg font-semibold mb-4 p-4'>
            This paragraph right here is rendered statically using Next.js By generating the content on the server at build time, Next.js ensures that search engines can easily crawl and index this page, boosting its SEO. Plus, serving static content lead to faster load times and a smoother user experience. And if I need interactivity, Next.js allows me to use the `use client` directives for specific components
        </p>
        <p className='text-lg font-semibold mb-4 p-4'>
            Pretty cool right? Now navigate to the `Client Page` to check how interactivity is added in Next.js
        </p>
    </div>
    </div>
  )
}

export default page