import React from 'react'

export default function RightNav() {
  return (
    <div className='bg-[#050a14] h-16 text-[#ffff] flex justify-between px-3 items-center'>
        <div><img width="30" height="50" src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png" alt="search--v1"/></div>
        <div className='flex items-center'>
            <div>
            <div>
                Example
            </div>
            <div className='text-sm pr-2 font-extralight text-[#34394f]'>clocked in 12:23PM</div>

            </div>
            <div>
            <img width="30" height="50" src="https://img.icons8.com/ios-filled/50/737373/user.png" alt="user"/>
            </div>
            
        </div>
      
    </div>
  )
}
