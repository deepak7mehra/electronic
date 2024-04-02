import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import MenuItem from './components/MenuItem'
import Item from './components/Item'
import RightNav from './components/RightNav'
import Cart from './components/Cart'
import Button from './components/Button'
import Available from './components/Available'


const myMenu = [
  {
    "name": "Table 1",
    "items": [{"Spring Roll":50},{"Corn":70},{"momos":50},{"samosa":20},{"chowmin":60}],
    "id":1,
    "status":"occupied"
    
  },
  {
    "name":"Table 2",
    "items":[{"Chicken Tikka":260},{"Tandoori Chiken":260},{"Cheese Kebab":260}],
    "id":2

  },
  {
    "name":"Table 3",
    "items":[{"Palak Paneer":300}],
    "id":3,
    "status":"occupied"

  },
  {
    "name":"Table 4",
    "items":[{"Margerita":250},{"Cheese Corn":600}],
    "id":4,
    
  },
  {
    "name":"Table 5",
    "items":[{"Ice cream":100},{"Choco lava":130}],
    "id":5,
    

  },
  {
    "name":"Table 6",
    "items":[{"Coco Cola":50}],
    "id":6,

  },
  {
    "name":"Table 7",
    "items":[{"Chiken Soup":60},{"Veg Soup":70}],
    "id":7,
    "status":"occupied"
   
  },
  {
    "name":"Table 8",
    "items":[{"Rumq":599}],
    "id":8,
    

  },
  {
    "name":"Table 9",
    "items":[{"Ice cream":100},{"Choco lava":130}],
    "id":9,
    

  },
  {
    "name":"Table 10",
    "items":[{"Coco Cola":50}],
    "id":10,
    "status":"occupied"

  }
]


export default function () {
  const [temp,setTemp] = useState(2)
  let arr = []
  if (temp!=0){
    arr = myMenu[temp-1]["items"];
  }
  
  return (
    <div className='md:grid md:grid-cols-10  min-h-screen'>

      <div className=' col-span-10 md:col-span-7 border-r-2 border-black'>
      <nav className='border-b-2 border-black'>
        <Navbar/>
      </nav>
      <div className='md:hidden bg-[#1976d2] text-[#ffff] mt-3 mx-4'>
        <div className='flex justify-evenly items-center'>
          <div><img className='w-[30px] md:w-[50px] ' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/restaurant--v1.png" alt="restaurant--v1"/></div>
          <div className='md:text-4xl flex flex-col items-center'>
            <div>Vacant</div>
            <div>6</div>
          </div>
          <div className='md:text-4xl flex flex-col items-center'>
            <div>In Use</div>
            <div>4</div>

          </div>
        </div>
        {/* <div>
          <RightNav/>
        </div>
        <div className=' min-h-[659px]'>
          <div className=' text-[#ffff] flex justify-between px-2 py-4 border-b-2 border-black'>

            <div>
              <div className='font-bold'>Table 1</div>
              <div className='text-sm'>Amrit R</div>
            </div>
            <div className='flex gap-3'>
              <div><img width="25" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/double-down--v1.png" alt="double-down--v1"/></div>
              <div><img width="25" height="50" src="https://img.icons8.com/ios/50/FFFFFF/waste.png" alt="waste"/></div>
              <div><img width="25" height="60" src="https://img.icons8.com/external-outline-juicy-fish/60/FFFFFF/external-write-contact-us-outline-outline-juicy-fish-3.png" alt="external-write-contact-us-outline-outline-juicy-fish-3"/></div>
            </div>
            </div>

            <div className='relative min-h-[400px]'>
            <Cart/>
            </div>

            <div className='grid grid-cols-3 gap-1'>
              <Button name={"Discount"}/>
              <Button name={"Cash"}/>
              <Button name={"UPI"}/>
            </div>

            <div className='px-8'>
              <div className=' text-[#34394f] flex justify-between mt-3'>
                <div className=''>Tax 5.25%</div>
                <div>₹0.00</div>
              </div>
              <div className=' text-[#34394f] flex justify-between mt-1'>
                <div className=''>Subtotal</div>
                <div>₹0.00</div>
              </div>
              <div className=' text-[#ffff] flex justify-between mt-1'>
                <div className=''>Total</div>
                <div>₹0.00</div>
              </div>
            </div>


          </div> */}

          
        
      </div>

      <main className=''>
        <div className='  pt-3 px-4 pb-3 text-[#ffff] font-semibold border-b-2 border-black'>
          <div className='gap-2 grid grid-cols-2 md:grid-cols-4'>
          

          {
            myMenu.map((menu)=>(
              <MenuItem setTemp={setTemp}  name={menu.name} id = {menu.id} status={menu.status}/>
            ))
          }

          </div>
          

        </div>
        <div className='grid gap-2 grid-cols-4 px-4 text-[#ffff]'>
          {temp!==0 &&
            arr.map(function(el){
              const [key] = Object.entries(el);
              return (<Item name={key[0]} price={key[1]}/>)
            })
          }

        </div>
      </main>
      
      </div>
      <div className='hidden  md:col-span-3  md:block'>
        {/* <div>
          <RightNav/>
        </div>
        <div className=' min-h-[659px]'>
          <div className=' text-[#ffff] flex justify-between px-2 py-4 border-b-2 border-black'>

            <div>
              <div className='font-bold'>Table 1</div>
              <div className='text-sm'>Amrit R</div>
            </div>
            <div className='flex gap-3'>
              <div><img width="25" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/double-down--v1.png" alt="double-down--v1"/></div>
              <div><img width="25" height="50" src="https://img.icons8.com/ios/50/FFFFFF/waste.png" alt="waste"/></div>
              <div><img width="25" height="60" src="https://img.icons8.com/external-outline-juicy-fish/60/FFFFFF/external-write-contact-us-outline-outline-juicy-fish-3.png" alt="external-write-contact-us-outline-outline-juicy-fish-3"/></div>
            </div>
            </div>

            <div className='relative min-h-[400px]'>
            <Cart/>
            </div>

            <div className='grid grid-cols-3 gap-1'>
              <Button name={"Discount"}/>
              <Button name={"Cash"}/>
              <Button name={"UPI"}/>
            </div>

            <div className='px-8'>
              <div className=' text-[#34394f] flex justify-between mt-3'>
                <div className=''>Tax 5.25%</div>
                <div>₹0.00</div>
              </div>
              <div className=' text-[#34394f] flex justify-between mt-1'>
                <div className=''>Subtotal</div>
                <div>₹0.00</div>
              </div>
              <div className=' text-[#ffff] flex justify-between mt-1'>
                <div className=''>Total</div>
                <div>₹0.00</div>
              </div>
            </div>


          </div> */}
          <Available/>

          
        
      </div>

    </div>
  )
}
