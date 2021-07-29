import React from 'react'
import ItemCount from '../Items/ItemCount'
import {useState, useEffect} from 'react'
import { getItems } from './getItems'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const handleCount=(cant)=>{
    alert('Vas a comprar: ' + cant)
}


function ItemDetail({item={}}) {
    const{ detallesId } =useParams()

    const [itemList, SetItemList] = useState([])
    useEffect(() => {
       

        const task = new Promise((resuelto, rechazado) => {
            let status = 200
            if (status === 200) {
                setTimeout(() => {
                    resuelto(itemList)
                }, 2000)
            } else {
                rechazado('rechazado')
            }
        })
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
    
    console.log(itemList)
    return (
        <div>
            {itemList.map((item) => <Card.Title>{item.nombre}</Card.Title>)} 
            {itemList.map((item) => 
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                        </Card.Body>
                    </Card>
                )} 
            <p>DETALLES:{itemList.detalle}</p>
            <ItemCount stock={10} initial={1} onAdd={handleCount}/>
        </div>
    )
}

export default ItemDetail
