import React from "react";
import { CartContext } from "../context/context";
import { useContext } from "react";
export const FoodItem = ( props ) => {
    const {additemtocart} = useContext(CartContext);
    function handlesubmit(e){
        e.preventDefault();
        additemtocart(props.food);
    }
    return (
        <div className="fooditem">
        <div className="amountofmenu">
            <p >Amount</p>
            <form onSubmit={handlesubmit}>
            <input defaultValue={1} className="inputofmenu" type="number"/>
            <button  type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
        <div><p>{props.food.name}</p></div>
        <div><p >{props.food.about}</p></div>
        <div><p >{props.food.price}</p></div>
        <hr/>
        </div>
    );
};