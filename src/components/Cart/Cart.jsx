import React, { useContext } from 'react'
import { NotiContext } from '../context/CartContext'

function Cart() {
    const {cartList, guardarItem, prince, size} = useContext(NotiContext)
    console.log(cartList)
    console.log(prince())
    console.log(size())

    return  (
        <>
           {cartList.map(item =>(
               <>
                <div className="row" key={item.item.id}> 
                    <p className="col">{item.item.nombre}</p>  
                    <p className="col">{item.quantity}</p>  
                    <p className="col">{item.item.precio}</p>  
                </div>
                <hr/>
                </>
            ))}
        </>
    )
}
export default Cart