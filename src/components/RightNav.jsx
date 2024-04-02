import React from 'react'

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
];
const filteredMenu = myMenu.filter(item=>item.status !== "occupied");
console.log(filteredMenu)


export default function RightNav() {
  return (
    <>
    <div className='bg-[#1976d2] h-16 text-[#ffff]  p-3 font-bold text-center text-xl'>
        Available Tables
      
    </div>

    <div>
      {
        filteredMenu.map((item)=>(
          <div className='p-3 m-3 border-2 border-black flex justify-between'>
            <div><img height="10" width="30" src="table.svg" alt="" /></div>
            <div className='font-bold'>{item.name}</div>
            
          </div>
        ))
      }
    </div>
    </>
  )
}
