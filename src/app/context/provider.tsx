"use client"

import CartData from "./context";
import { useState } from "react";
import { CartType } from "./context";

export default function CartProvider({children} : {children : React.ReactNode}) {

const [cart, setCart]= useState<CartType[] | []>([]);

    return(
        <CartData.Provider value={{cart, setCart}}>
            {children}
        </CartData.Provider>
    )
}
