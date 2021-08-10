import React, { useContext } from 'react'
import { LiquidosContext } from '../context/CartContext'

function Carrito() {
    const { cartList, guardarItem, prince, size } = useContext(LiquidosContext)
    console.log(cartList)
    console.log(size())

    return (
        <>
            {cartList.map(item => (
                <>
                    <div className="row" key={item.item.id}>
                        <p className="col">{item.item.nombre}</p>
                        <p className="col">{item.quantity}</p>
                        <p className="col">{item.item.category}</p>
                    </div>
                </>
            ))}
        </>
    )
}
export default Carrito