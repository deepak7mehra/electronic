import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';



export default function MenuItem({name,items,active,id,setId}) {
    console.log(active)
  return (
    
        <div onClick={()=>setId(id)}  className={`relative bg-[#007bff] text-[#ffff] m-1 cursor-pointer h-40 flex flex-col justify-between py-3 pl-3 shadow-md shadow-black  font-semibold  border-black`}>
        <div>
            {name}
        </div>
        <div className='flex justify-between items-center'>
            {items} Items
            
        </div>
        {active && <div className='absolute top-0 left-[80%] bg-white bottom-0 right-0 flex items-center justify-center bg-opacity-25'>
            <img  width="35" height="50" src="https://img.icons8.com/ios/50/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1"/>

        </div>}
        
        </div>
        
    
  )
}
