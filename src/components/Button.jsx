import React from 'react'

export default function Button({name}) {
  return (
    <div className='bg-[#1976d2] text-center p-3 border-[1px] border-black text-[#ffff] font-semibold'>
      {name}
    </div>
  )
}
