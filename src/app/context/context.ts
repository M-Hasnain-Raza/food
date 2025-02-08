import { createContext, Dispatch, SetStateAction } from "react";

interface CartType {
    name : string,
    price : number,
    orignalPrice : number,
    image : string,
    quantity : number,
}

const CartData  = createContext<{cart : CartType[] | [], setCart : Dispatch<SetStateAction<CartType[] | []>>} | []>([]);

export default CartData;

export type {CartType};
