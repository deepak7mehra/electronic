import React from 'react'

export default function MenuItem({name,id,setTemp,status="vacant"}) {
  return (
    <div onClick={()=> setTemp(id)} className={` text-[#fffff] ${status==='occupied'?'bg-[#f30100]':'bg-[#00f527]'} h-40 flex flex-col justify-between py-3 pl-3 shadow-md shadow-black cursor-pointer font-semibold border-2 border-black`}>
      <div>
        {name}
      </div>
      <div>
        status --- {status}
      </div>
    </div>
  )
}
