import React from 'react'

export default function MenuItem({color,name,noItems,id,setTemp}) {
  return (
    <div onClick={()=> setTemp(id)} className={` ${color} h-40 flex flex-col justify-between py-3 pl-3 shadow-md shadow-black cursor-pointer `}>
      <div>
        {name}
      </div>
      <div>
        {noItems} items
      </div>
    </div>
  )
}
