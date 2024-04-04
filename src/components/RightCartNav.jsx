import React from 'react'
import ClearCart from '../services/ClearCart'

export default function RightCartNav() {
  return (
    <div className='border-b border-black flex justify-between px-4 py-2'>
        <div className='font-semibold'>
            <p>Table 1</p>
            <p>Amrit R</p>
        </div> 
        <div>
            <ClearCart/>

        </div>
    </div>

    
  )
}
