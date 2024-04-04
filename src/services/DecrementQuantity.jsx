import React from 'react'
import { decreaseItem} from '../cart/cartSlice'
import {  useDispatch } from 'react-redux'


export default function DecrementQuantity({name}) {
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(decreaseItem(name))

    }


  return (
    
    <button onClick={handleClick} className=''><img width="25" height="50" src="https://img.icons8.com/ios/50/1A1A1A/minus.png" alt="minus"/></button>
      
  )
}