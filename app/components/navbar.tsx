

import Links from './link'
 
export function Navbar() {

  return (
    <nav>
     <div className='flex justify-items-start w-full bg-slate-400 m-0 p-2 z-10'>
     <div className=' px-2 mx-4'>
        <Links  pathName='Home' pathto='/'/>
      </div>

      <div className='mx-2 px-2'>
        <Links  pathName='Server Page' pathto='/server'/>
      </div>

      <div className='mx-2 px-2'>
        <Links  pathName='Client Page' pathto='/client'/>
      </div>
     </div>

    </nav>
  )
}

export default Navbar