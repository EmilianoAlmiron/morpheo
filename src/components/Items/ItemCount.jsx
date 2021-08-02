import React, {useState} from 'react'
import './Item.css'


function ItemCount({initial, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)
    const handleAdd=()=>{
        if (cantidad<stock) {
            setCantidad(cantidad+1)
        }
    }
    const handleRemove=()=>{
        if (cantidad>initial) {
            setCantidad(cantidad-1)
        }
    }
    const handleOnAdd=()=>{
        onAdd(cantidad)
    }
    
    return (
        <>
            <div className="card text-center btnCards">
                <div className="card-headedr" className="btnCards_titulo">
                    <h3>Liquido de Vapeo</h3>
                </div>
                <div className="card-body">
                    <button onClick={handleRemove}>
                        -
                    </button>
                    <label className="alert alert-white">
                        {cantidad}
                    </label>
                    <button onClick={handleAdd}>
                        +
                    </button>
                    <button className="btn btn-primary btn-block btnCards_btn" onClick={handleOnAdd}>
                        Agregar al Carrito 
                    </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount
