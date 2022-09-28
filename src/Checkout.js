import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://www.webfx.com/wp-content/uploads/2021/11/img-types-of-amazon-ads__02.png" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Shoping Basket</h2>
                </div>
            </div>


            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout