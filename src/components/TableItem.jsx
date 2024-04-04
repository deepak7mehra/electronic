import React from 'react'

export default function MenuItem({name,id,status="vacant"}) {
  return (
    <div  className={` text-[#fffff] ${status==='occupied'?'bg-[#f30100]':'bg-[#00f527]'} cursor-pointer h-40 flex flex-col justify-between py-3 pl-3 shadow-md shadow-black  font-semibold border-2 border-black`}>
      <div>
        {name}
      </div>
      <div className='flex justify-between items-center'>
        <div>{status}</div>
        <div><button><img width="64" height="64" src="https://img.icons8.com/wired/64/FFFFFF/bill.png" alt="bill"/></button></div>
        
      </div>
    </div>
  )
}
