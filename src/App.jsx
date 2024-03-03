import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import MenuItem from './components/MenuItem'
import Item from './components/Item'
import RightNav from './components/RightNav'
import Cart from './components/Cart'
import Button from './components/Button'


const myMenu = [
  {
    "name": "Starter (veg)",
    "items": [{"Spring Roll":50},{"Corn":70},{"momos":50},{"samosa":20},{"chowmin":60}],
    
  },
  {
    "name":"Starter (non veg)",
    "items":[{"Chicken Tikka":260},{"Tandoori Chiken":260},{"Cheese Kebab":260}],

  },
  {
    "name":"Main Course",
    "items":[{"Palak Paneer":300}],

  },
  {
    "name":"Pizza",
    "items":[{"Margerita":250},{"Cheese Corn":600}],
    
  },
  {
    "name":"Dessert",
    "items":[{"Ice cream":100},{"Choco lava":130}],
    

  },
  {
    "name":"Beverage",
    "items":[{"Coco Cola":50}],

  },
  {
    "name":"Soups",
    "items":[{"Chiken Soup":60},{"Veg Soup":70}],
   
  },
  {
    "name":"Rum",
    "items":[{"Rumq":599}],
    

  }
]


export default function () {
  const [temp,setTemp] = useState(2)
  let arr = []
  if (temp!=0){
    arr = myMenu[temp-1]["items"];
  }
  
  return (
    <div className='grid md:grid-cols-10 bg-[#0a0f28] min-h-screen'>

      <div className=' col-span-10 md:col-span-7 border-r-2 border-black'>
      <nav className='border-b-2 border-black'>
        <Navbar/>
      </nav>
      <main className=''>
        <div className='  pt-3 px-4 pb-3 text-[#ffff] font-semibold border-b-2 border-black'>
          <div className='gap-2 grid grid-cols-2 md:grid-cols-4'>
          <MenuItem setTemp={setTemp} color = {"bg-[#b43c3c]"} name={myMenu[0]["name"]} noItems = {myMenu[0].items.length} id={1}/>
          <MenuItem setTemp={setTemp} color = {"bg-[#5a41af]"} name={myMenu[1]["name"]} noItems = {myMenu[1].items.length} id={2}/>
          <MenuItem setTemp={setTemp} color = {"bg-[#7d147d]"} name={myMenu[2]["name"]} noItems = {myMenu[2].items.length} id={3}/>
          <MenuItem setTemp={setTemp} color = {"bg-[#1e2369]"} name={myMenu[3]["name"]} noItems = {myMenu[3].items.length} id={4}/>
          <MenuItem setTemp={setTemp} color = {"bg-[#3755b9]"} name={myMenu[4]["name"]} noItems = {myMenu[4].items.length} id={5}/>
          <MenuItem setTemp={setTemp} color = {"bg-[#735a2d]"} name={myMenu[5]["name"]} noItems = {myMenu[5].items.length} id={6}/>
          <MenuItem setTemp={setTemp} color = {"bg-[#9b234b]"} name={myMenu[6]["name"]} noItems = {myMenu[6].items.length} id={7}/>
          <MenuItem setTemp={setTemp} color = {"bg-[#28502d]"} name={myMenu[7]["name"]} noItems = {myMenu[7].items.length} id={8}/>

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
      <div className='md:col-span-3  md:visible'>
        <div>
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


          </div>

          
        
      </div>

    </div>
  )
}
