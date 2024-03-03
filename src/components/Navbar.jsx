import React from 'react'
import NavItem from './NavItem'

export default function Navbar() {
  return (
    <div className='bg-[#050a14] text-[#e3e6ed] flex justify-between items-center px-5 font-semibold min-h-20'>
      <div className='flex gap-4'>
        <div className='text-white'><img width="35" height="50" src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-left.png" alt="long-arrow-left"/></div>
        <div>
            <div>Menus</div>
            <div className='text-sm font-thin'>Items</div>
        </div>
      </div>
      <div className='flex gap-4'>
        <div><NavItem bg={0} name={"Amrit R"}/></div>
        <div><NavItem bg={1} name={"Orders"}/></div>
        <div><NavItem bg={2} name={"Customers"} /></div>
      </div>
    </div>
  )
}
