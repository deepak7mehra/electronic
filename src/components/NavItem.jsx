import React from 'react'

export default function NavItem({bg,name}) {
   /*  const arr = ["bg-[#0a0f28]","bg-[#333fd3]","bg-[#5a46af]"]
    const color = arr[0]; */
  return (
    <div className={`bg-[#1976d2] text-white  py-3 px-5 rounded-3xl text-sm`}>
       <div>{name}</div>
      
    </div>
  )
}
