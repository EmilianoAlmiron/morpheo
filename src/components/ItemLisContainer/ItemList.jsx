import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getItems } from '../ItemDetailContainer/getItems'


function ItemList(props) {
    const{ categoryId } =useParams()

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
        if(categoryId===undefined){
            getItems()
                .then((resp) => SetItemList(resp))
                .catch(err => { console.log('un error') }) 
        }else{
            getItems()
            .then((resp) => SetItemList(resp.filter(it => it.category===categoryId)))
            .catch(err => { console.log('un error') }) 
        }
    }, [categoryId])

    return (
        <div>
            
                {itemList.map((item) => 
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text>
                               {item.categoria}
                            </Card.Text>
                            <Link to={`/detalle/${props.id}`} variant="primary">queres saber mas?</Link>
                        </Card.Body>
                    </Card>
                )} 
        </div>
    )
}

export default ItemList;
