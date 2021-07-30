import React from 'react'
import ItemCount from '../Items/ItemCount'
import {useState, useEffect} from 'react'
import { getItems } from './getItems'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const handleCount=(cant)=>{
    alert('Vas a comprar: ' + cant)
};


const ItemDetail = () => {
    const [item, setItem] = useState([]);
    const{ detallesId } =useParams();
    console.log(detallesId);
    useEffect(() =>{
        if(detallesId===undefined){
            getItems()
                .then((resp) => setItem(resp))
                .catch(err => { console.log('un error') }) 
        }else{
            getItems()
            .then((resp) => setItem(resp.filter(it => it.id===detallesId)))
            .catch(err => { console.log('un error') }) 
        }
    }, [detallesId])
    
    console.log(item)
    return (
        <div>
            {item.map((it) => (
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{it.nombre}</Card.Title>
                        </Card.Body>
                        <p>DETALLES:{it.detalle}</p>
                    </Card>
            ))} 
            <ItemCount stock={10} initial={1} onAdd={handleCount}/>
        </div>
    )
}

export default ItemDetail
