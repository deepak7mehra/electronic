import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../cart/cartSlice'

export default function ClearCart() {
    const dispatch = useDispatch();

    
  return (
    <button onClick={()=> dispatch(clearCart())}>
        <img width="30" height="50" src="https://img.icons8.com/ios/50/waste.png" alt="waste"/>
    </button>
  )
}
