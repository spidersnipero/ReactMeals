import React from "react";
import { FoodItem } from "./foodItem";
import { CartContext } from "../context/context";

const foods = [
    {id:1,name: "Pizza",about:"comes with special sauce ",price: 5.99},
    {id:2,name: "Burger",about:"can be spicy ",price: 3.99},
    {id:3,name: "Sushi",about:"made with finest fish",price: 12.99},
    {id:4,name: "Buble Tea",about:"can get extra boba",price: 8.35}
]

function cartfooditem(food){
    return {
        ...food,
        count:1
    }
}

function additemtocart(cart,fooditem){
    const newcart = [...cart];
    const founditem = newcart.find((item) => item.id === fooditem.id);
    if(founditem){
        founditem.count++;
    }else{
        newcart.push(cartfooditem(fooditem));
    }
    return newcart;
}

function removeitemfromcart(cart,fooditem){
    const newcart = [...cart];
    const founditem = newcart.find((item) => item.id === fooditem.id);
    if(founditem){
        founditem.count--;
    }
    return newcart.filter((item) => item.count > 0);
}

export const FoodMenuWithContext = ({children}) => {
    const [cartd, setCart] = React.useState([]);
    const vals = {   
        cartd,
        setCart,
        additemtocart: (fooditem) => setCart(additemtocart(cartd,fooditem)),
        removeitemfromcart: (fooditem) => setCart(removeitemfromcart(cartd,fooditem))
    }
    return <>
        <CartContext.Provider value={vals}>
            {children}
        </CartContext.Provider>
    </>
}



export const FoodMenu = () => {
    return<div className="foodmenu">
        {foods.map((food) => (
        <FoodItem food={food} />
    ))}
    </div>
}



