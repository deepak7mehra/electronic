import React from 'react'
import IncreaseQuantity from '../services/IncreaseQuantity'
import DecrementQuantity from '../services/DecrementQuantity'

export default function CartItem({name,quantity,price}) {
  return (
    <div className='p-1 border-b flex justify-between'>
        <div>
            {name}
            <div className='flex flex-row gap-2'>
                <IncreaseQuantity name={name}/>
                {quantity}
                <DecrementQuantity name={name} />
            </div>
        </div>
        <div>
        ₹ {price} X {quantity}
        </div>
      
    </div>
  )
}
