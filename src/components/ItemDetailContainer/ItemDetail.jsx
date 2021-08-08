import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useState, useContext} from 'react'
import './card_detalle.css'
import Detail from './Detail' 
import {NotiContext} from '../context/CartContext'

function ItemDetail({item={}}) {
    const [cantidad, setCantidad] = useState(0)
    const [pulsar, setPulsar] = useState(false)

    const {cartList, guardarItem} = useContext(NotiContext)

    function onAdd(count) {
        setCantidad(count)
        guardarItem({item: item,quantity: count})
    }

    console.log(cartList)
    return (
        <div className="row">

             <Detail item={item} className="w-50" />
             <ItemCount onAdd={onAdd} initial={1} stock={6}/>
             {/* { pulsar && <button className="btn btn-success btn-block">IR A CART</button> }  */}
        </div>
    )
}

export default ItemDetail
