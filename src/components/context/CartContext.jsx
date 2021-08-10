import { createContext, useState } from "react";

export const LiquidosContext = createContext()//estados y funciones sean globales para todos. 

export default function UseLiquidosContext({children}){
    const [cartList, setCartList] = useState([])// {item: item, quantity: quantity}
    
    function guardarItem(newItem){
        const idx = cartList.findIndex(item => newItem.item.id === item.item.id)//-1 , posicion
        if(idx === -1){
            setCartList([...cartList,newItem])
        }else{
            const newQuantity= cartList[idx].quantity + newItem.quantity
            const oldList = cartList.filter(old=> old.item.id !== newItem.item.id)
            setCartList([...oldList,{item: newItem.item, quantity: newQuantity}])
        }
    }
    
    const removeItem = (oldItemId) =>{
        const oldList = cartList.filter(item => item.item.id !== oldItemId)
    }

    const price =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity* valor.item.precio)), 0) //[item.quantity, ]
    }
    const size =()=>{
        return cartList.reduce((acum, valor)=> acum + valor.quantity, 0) //[item.quantity],0) 
    }

    function cleanList (){
        setCartList([])
    }

    return(
        <LiquidosContext.Provider value={{
            cartList,
            removeItem,
            price,
            size,
            guardarItem,
            cleanList
        }}>
            {children}
        </LiquidosContext.Provider>
    )
};