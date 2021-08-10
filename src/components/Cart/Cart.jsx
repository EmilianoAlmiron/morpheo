import React, { useContext } from 'react'
import { LiquidosContext } from '../context/CartContext'

function Carrito() {
    const { cartList, guardarItem, price, size, removeItem, cleanList } = useContext(LiquidosContext)
    console.log(cartList)
    console.log(price())

    return (
        <>
            {cartList.map(item => (
                
                    <div className="row" key={item.item.id} >
                        <p className="col">{item.item[0].nombre}</p>
                        <p className="col">{item.quantity}</p>
                        <p className="col">{item.item[0].category}</p>
                        <p className="col">{item.item[0].precio}</p>
                        <button className="col" onClick={removeItem}>X</button>
                        <button className="col" onClick={cleanList}>eliminar todo</button>
                    </div>
                
            ))}
        </>
    )
}
export default Carrito