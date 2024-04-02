import React from 'react'
import NavItem from './NavItem'

export default function Navbar() {
  return (
    <div className=' text-[black] flex justify-between items-center px-5 font-semibold min-h-20'>
      <div className='flex gap-4'>
        <div className='text-white'><img width="35" height="50" src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-left.png" alt="long-arrow-left"/></div>
        <div>
            <div>Menus</div>
            <div className='text-sm font-thin'>Items</div>
        </div>
      </div>
      <div className='flex gap-4'>
        <div><NavItem  name={"Amrit R"}/></div>
        <div><NavItem  name={"Orders"}/></div>
        
      </div>
    </div>
  )
}
