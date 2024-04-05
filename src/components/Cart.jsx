import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { NavLink } from 'react-router-dom'

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  return (
    <div className=''>

      {cart.length === 0 && <div className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]'>
        <img width="50" height="50" src="https://img.icons8.com/quill/50/737373/shopping-cart.png" alt="shopping-cart" />
        <div className='text-[#252a3e]'>no item</div>
      </div>
      }

      {
        cart.length !== 0 &&
        <div>
          {cart.map((item) => <CartItem name={item.name} quantity={item.quantity} price={item.price} />)}
        </div>
      }

      <NavLink to="/" className='fixed bottom-[70px] md:bottom-2  left-2 '>
        <div className='bg-black w-[70px] p-3 rounded-full'>
          <div><img width="40" height="50" src="https://img.icons8.com/quill/50/FFFFFF/open-book.png" alt="open-book" /></div>
          <div className='text-[#ffff] text-sm'>MENU</div>
        </div>

      </NavLink>

    </div>
  )
}
