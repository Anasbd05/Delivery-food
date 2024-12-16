/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart , getTotalCart} = useContext(StoreContext);

  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  <p className="remove" onClick={() => removeFromCart(item.id)}>
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
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
          <button onClick={()=>navigate("/order")}>Proceed to checkout</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className="promocode-input">
              <input type="text" placeholder="Promo Code"/>
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
