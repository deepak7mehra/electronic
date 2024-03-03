import React from 'react'

export default function Item({name,price}) {
  return (
    <div className='bg-[#141932] flex justify-between px-3 min-h-36'>
      <div className='pt-4'>
        <div>{name}</div>
        <div className='text-[#676b87]'> ₹ {price}</div>
        <div className='pt-8'>Orders - <span className='text-[#676b87]'>kitchen</span>  </div>
      </div>
      <div className='flex flex-col justify-between py-4 items-center'>
        <button className='bg-[#0a0f28]'><img width="20" height="24" src="https://img.icons8.com/android/24/FFFFFF/plus.png" alt="plus"/></button>
        <div>0</div>
        <button className='bg-[#0a0f28]'><img width="20" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/minus-math.png" alt="minus-math"/></button>
      </div>
    </div>
  )
}
