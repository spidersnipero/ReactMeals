import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CartContext } from "../context/context";
import { useContext } from "react";

export const Cart = (props) => {
  const {cartd,additemtocart,removeitemfromcart,setCart} = useContext(CartContext);
  const [showPortal, setShowPortal] = useState(false);
  const ordercart = () => {
    alert('your order has been placed');
    setShowPortal(prev => !prev); 
    setCart([]);
  }
  const handle = () => {
    setShowPortal(prev => !prev);
  };
  if (!showPortal) {
    return (
      <div onClick={handle}>{props.children}</div>
    );
  }
  return ReactDOM.createPortal(
    
    <div className="cartportal">
      <p onClick={handle} className='btn btn-danger closebtn'>X</p>
      <div className="cartitems">
        {cartd.map((item) => (
          <div className="cartitem">
            <h2>{item.name}</h2>
            <div className="amountofcart">
            <p>amount  : {item.count*item.price}</p>
            <div className="amountofcartcountdiv">
              <p className="amountofcartcount">x{item.count}</p>
            </div>
            </div>
            <div className='cartmanipulator'>
              <p onClick={()=>{additemtocart(item)}} className='btn btn-success' >+</p>
              <p onClick={()=>{removeitemfromcart(item)}} className='btn btn-danger'>-</p>
            </div>
            <hr/>
          </div>
        ))}
        <div className="total">
          {cartd.length!==0 &&<h3>Total : {cartd.reduce((acc,item) => acc + item.count*item.price,0)}</h3>}
        </div>
        <div>
          {cartd.length!==0 && <h4 onClick={ordercart} className='btn btn-info'>order</h4>}
        </div>
        <div>
          {cartd.length===0 && <h4>cart is empty</h4>}
        </div>
      </div>
    </div>,
    document.getElementById('root')
    
  );
};

