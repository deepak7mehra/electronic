import React from 'react'
import Item from './components/Item';
import { NavLink, useLocation } from 'react-router-dom';




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


export default function MenuItemPage() {
    const loaction = useLocation();
    const myParam = new URLSearchParams(location.search).get('id');
    const id = myParam;
    let arr = []
    if (id!=0){
        arr = myMenu[id-1]["items"];
    }
  return (
    <>
    <div className='m-2 mt-3 gap-2 grid grid-cols-2 md:grid-cols-4 relative '>
          {
            id && arr.map(function(item){
                const [key] = Object.entries(item);
                return <Item name={key[0]} price={key[1]}/>
        })
          }

      <div className='fixed bottom-2  left-2 '>
      <div className='bg-black w-[70px] p-3 rounded-full'>
        <NavLink to="/menu"><img width="40" height="50" src="https://img.icons8.com/quill/50/FFFFFF/open-book.png" alt="open-book"/></NavLink> 
        <div className='text-[#ffff] text-sm'>MENU</div>
      </div>

    </div>

    </div>
    
    </>
  )
}
