import React from 'react'

function Detail({item}) {
    return (
        <div className="w-50">
            <img src={item.img} className="w-75" />
            <h3>Nombre:{ item.nombre }</h3>  
            <h3>Tamaño: {item.ml}</h3>  
            <h3>Descripcion:{item.detalle} </h3> 
             
        </div>           
    )
}

export default Detail
