import React from 'react'
import ItemCount from '../Items/ItemCount'
import {useState, useEffect} from 'react'
import { getItems } from './getItems'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import style from './card_detalle.css'

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
                    <Card className="card_detalles" key={item.id}>
                        <Card.Img variant="top" src={it.img} />
                        <Card.Body>
                            <Card.Title>{it.nombre}</Card.Title>
                        </Card.Body>
                        <p>DETALLES:{it.detalle}</p>
                        <ItemCount stock={10} initial={1} onAdd={handleCount}/>
                    </Card>
            ))} 
        </div>
    )
}

export default ItemDetail
