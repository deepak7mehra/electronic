import React from 'react'
import IncreaseQuantity from '../services/IncreaseQuantity'
import DecrementQuantity from '../services/DecrementQuantity'
import { useDispatch } from 'react-redux'
import { addItem } from '../cart/cartSlice'


export default function Item({name,price}) {
  const dispatch = useDispatch();

  function handleClick(){
    const item = {
      name,
      price,
      quantity:1
    }
    dispatch(addItem(item))
  }

  return (
    <div onClick={handleClick} className=' cursor-pointer'>
    
    <div className=' border border-black flex justify-between px-3 min-h-36'>
      <div className='pt-4'>
        <div>{name}</div>
        <div className='text-[#676b87]'> ₹ {price}</div>
        <div className='pt-8'>Orders - <span className='text-[#676b87]'>kitchen</span>  </div>
      </div>
      <div className='flex flex-col justify-between py-4 items-center'>
        {/* <IncreaseQuantity name={name} />
        <div>0</div>
        <DecrementQuantity name={name}/> */}
      </div>
    </div>

    </div>
  )
}
