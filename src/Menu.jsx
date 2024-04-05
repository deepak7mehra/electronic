import React, { useState } from 'react'
import Cart from './components/Cart'
import Button from './components/Button'
import RightNav from './components/RightNav'
import Navbar from './components/Navbar'
import MenuItem from './components/MenuItem'
import Item from './components/Item'
import RightCartNav from './components/RightCartNav'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import MenuTable from './MenuTable'


const myMenu = [
    {
      "name": "Starter (veg)",
      "items": [{"Spring Roll":50},{"Corn":70},{"momos":50},{"samosa":20},{"chowmin":60}],
      "id":1
      
    },
    {
      "name":"Starter (non veg)",
      "items":[
        {"Chicken Tikka":260},
        {"Tandoori Chiken":260},
        {"Cheese Kebab":260}
      ],
      "id":2
    },
    {
      "name":"Main Course",
      "items":[{"Palak Paneer":300}],
      "id":3
  
    },
    {
      "name":"Pizza",
      "items":[{"Margerita":250},{"Cheese Corn":600}],
      "id":4
      
    },
    {
      "name":"Dessert",
      "items":[{"Ice cream":100},{"Choco lava":130}],
      "id":5
      
  
    },
    {
      "name":"Beverage",
      "items":[{"Coco Cola":50}],
      "id":6
  
    },
    {
      "name":"Soups",
      "items":[{"Chiken Soup":60},{"Veg Soup":70}],
      "id":7
     
    },
    {
      "name":"Rum",
      "items":[{"Rumq":599}],
      "id":8
      
  
    }
]


export default function Menu() {
    const [id ,setId] = useState(1);
    let arr = []
    if (id!=0){
        arr = myMenu[id-1]["items"];
    }
  return (
    <div className={`md:grid md:grid-cols-10`}>
        <div className='col-span-10 md:col-span-7 border-r-2'>
            <nav className='border-b-2   border-black'>
                <Navbar type={"Menu"} />
            </nav>
            
            <div className=''>
              <Outlet/>
            </div>    
                
          
          {/* <div className='m-2 mt-3 gap-2 grid grid-cols-2 md:grid-cols-4'>
          {
            id && arr.map(function(item){
                const [key] = Object.entries(item);
                return <Item name={key[0]} price={key[1]}/>
        })
          }

          </div> */}
          

        </div>

        <div className='col-span-3'>
            <div>
                <RightCartNav/>
            </div>
            <div className=' min-h-[659px]'>
            
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
