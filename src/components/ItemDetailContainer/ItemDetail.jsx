import React from 'react'
import SisifoIMG from '../imagenes/sisifo_deuteros.jpg'

function ItemDetail({item={}}) {
    //console.log()
    return (
        <div>
            <img src={SisifoIMG}/>
            <h3>Nombre:{item.nombre}</h3>
            <h3>Precio:{item.precio}</h3>
        </div>
    )
}

export default ItemDetail
