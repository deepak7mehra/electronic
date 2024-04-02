import React from 'react'
import NavItem from './NavItem'

export default function Navbar() {
  return (
    <div className=' text-[black] px-1 flex justify-between items-center md:px-5 font-semibold min-h-20'>
      <div className='flex gap-4'>
        
        <div>
            <div>Tables</div>
            <div className='text-sm font-thin'>16 tables</div>
        </div>
      </div>
      <div className='flex gap-4'>
        <div><NavItem  name={"Amrit R"}/></div>
        <div><NavItem  name={"Orders"}/></div>
        
      </div>
    </div>
  )
}
