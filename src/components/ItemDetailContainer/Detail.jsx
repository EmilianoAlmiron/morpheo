import React from 'react'

function Detail({ item }) {
    return (
        <>
            {
                item && item.map(el => {
                    return <div className="w-50">
                        <img src={el.img} className="w-75" />
                        <h3>Nombre:{el.nombre}</h3>
                        <h3>Tamaño: {el.ml}</h3>
                        <h3>Descripcion:{el.detalle} </h3>

                    </div>
                })
            }
        </>
    )
}

export default Detail
