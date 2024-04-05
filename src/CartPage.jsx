import React from 'react'
import RightCartNav from './components/RightCartNav'
import Button from './components/Button'
import Cart from './components/Cart'

export default function CartPage() {
    return (
        <div className='bg-[#e9ecee] '>
            <div className='bg-white w-[500px] mx-auto py-2'>
                <div>
                    <RightCartNav />
                </div>
                <div className=''>

                    <div className='relative min-h-[400px]'>
                        <Cart />
                    </div>

                    <div className='grid grid-cols-3 gap-1'>
                        <Button name={"Discount"} />
                        <Button name={"Cash"} />
                        <Button name={"UPI"} />
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
