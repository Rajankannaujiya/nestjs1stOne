"use client"

import React from 'react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

interface LinksProps{
    pathto:string;
    pathName:string;
}

function Links(
    {pathto,pathName}:LinksProps
) {

    const pathname = usePathname()
  return (
    <div className='m-4 p-2 rounded-md text-white bg-slate-700 hover:bg-slate-600  hover:text-blue-100'>   
        <Link className={`link ${pathname === pathto? 'active' : ''}`}  href={pathto}>
    {pathName}

</Link>
</div>
  )
}

export default Links