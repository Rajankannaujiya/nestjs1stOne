
"use client"

import React, { useState } from 'react'
import Navbar from '../components/navbar';

function Page() {
    const [count,setCount] = useState(0);



  return (

    <div className='h-screen flex justify-center w-full'>
    <div className='flex justify-center flex-col m-4 p-10 max-w-screen-md '>
    
        <h1 className='text-2xl font-bold mb-4 p-4 text-blue-700 '>
            Welcome to the Interactive page
        </h1>

        <p className='text-lg font-semibold mb-4 p-4'>
            This route features a count button that demonstrate the power of client-server interactivity in Next.js. Click the button and see the count go up! This interactive feature is powered by the `use client` directive in Next.js which allows the component to be rendered on the client-side.
        </p>

       <div className='text-xl font-medium mb-4 p-4 text-white'>
       <button onClick={()=>{
            setCount(count+1)
        }} className='bg-slate-900 rounded-xl p-5'>count{count}</button>
    </div>
       </div>
    </div>
  )
}

export default Page