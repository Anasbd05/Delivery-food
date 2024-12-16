import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../../context/StoreContext'

const PlaceOrder = () => {


  const {getTotalCart} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <h2 className='title'>Delivery informations</h2>
        <div className="multi-field">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email adress' />
        <input type="text" placeholder='Street' />
        <div className="multi-field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Zid code' />
          <input type="text" placeholder="Country"/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCart()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delevery fee</p>
              <p>${getTotalCart() === 0 ? 0 :2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCart()===0 ? 0 : getTotalCart() + 2}</b>
            </div>
          </div>
          <button>Proceed to Payement</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
