import React from 'react'
import { increaseItem } from '../cart/cartSlice'
import {  useDispatch } from 'react-redux'


export default function IncreaseQuantity({name}) {
    const dispatch = useDispatch();

    function handleClick(){
        console.log(name)
        dispatch(increaseItem(name))

    }


  return (
    
    <button onClick={handleClick} className=""><img width="25" height="50" src="https://img.icons8.com/ios/50/1A1A1A/plus--v1.png" alt="plus--v1"/></button>
      
  )
}
