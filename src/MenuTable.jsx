import React, { useState } from 'react'
import MenuItem from './components/MenuItem'
import { NavLink } from 'react-router-dom';



const myMenu = [
  {
    "name": "Starter (veg)",
    "items": [{ "Spring Roll": 50 }, { "Corn": 70 }, { "momos": 50 }, { "samosa": 20 }, { "chowmin": 60 }],
    "id": 1

  },
  {
    "name": "Starter (non veg)",
    "items": [
      { "Chicken Tikka": 260 },
      { "Tandoori Chiken": 260 },
      { "Cheese Kebab": 260 }
    ],
    "id": 2
  },
  {
    "name": "Main Course",
    "items": [{ "Palak Paneer": 300 }],
    "id": 3

  },
  {
    "name": "Pizza",
    "items": [{ "Margerita": 250 }, { "Cheese Corn": 600 }],
    "id": 4

  },
  {
    "name": "Dessert",
    "items": [{ "Ice cream": 100 }, { "Choco lava": 130 }],
    "id": 5


  },
  {
    "name": "Beverage",
    "items": [{ "Coco Cola": 50 }],
    "id": 6

  },
  {
    "name": "Soups",
    "items": [{ "Chiken Soup": 60 }, { "Veg Soup": 70 }],
    "id": 7

  },
  {
    "name": "Rum",
    "items": [{ "Rumq": 599 }],
    "id": 8


  }
]

export default function MenuTable() {
  const [id, setId] = useState(1);
  return (
    <div className='gap-2 grid grid-cols-2 md:grid-cols-4'>
      
        {
          myMenu.map(function (item) {

            return <NavLink to={{
              pathname: 'item',
              search: `?id=${item.id}`
            }}> <MenuItem name={item.name} items={item.items.length} active={id === item.id} id={item.id} setId={setId} /> </NavLink>
          })
        }


    </div>
  )
}
