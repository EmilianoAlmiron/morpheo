import React from 'react'
import ItemCount from '../Items/ItemCount'
import {useState, useEffect} from 'react'
import { getItems } from './getItems'
import { useParams } from 'react-router-dom'

const handleCount=(cant)=>{
    alert('Vas a comprar: ' + cant)
}


function ItemDetail({item={}}) {
    const{ detallesId } =useParams()
    const [Items, SetItemList] = useState([])
    
    useEffect(() =>{
        if(detallesId===undefined){
            getItems()
            .then((resp) => SetItemList(resp))
            .catch(err => { console.log('un error') }) 
        }else{
            getItems()
            .then((resp) => SetItemList(resp.filter(it => it.detalle===detallesId)))
            .catch(err => { console.log('un error') }) 
        }
    }, [detallesId])
    
    console.log(Items)
    return (
        <div>
            {Items.map(it => <h3>Nombre:{it.nombre}</h3>)}
            
            <h3>Precio:{item.precio}</h3>
            <p>DETALLES:{Items.detalle}</p>
            <ItemCount stock={10} initial={1} onAdd={handleCount}/>
        </div>
    )
}

export default ItemDetail
