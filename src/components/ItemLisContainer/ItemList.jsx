import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
import { getItems } from '../ItemDetailContainer/getItems'
import Item from '../Items/Item';
import './ItemLis.css';

function ItemList(props) {
    const { categoryId } = useParams()

    const [itemList, SetItemList] = useState([])
    useEffect(() => {
        if (categoryId === undefined) {
            getItems()
                .then((resp) => SetItemList(resp))
                .catch(err => { console.log('un error') })
        } else {
            getItems()
                .then((resp) => SetItemList(resp.filter(it => it.category === categoryId)))
                .catch(err => { console.log('un error') })
        }
    }, [categoryId])

    return (
        <div>
            {itemList.map((item) => (
                <Card className="listaProductos"  key={item.id}>
                    <Item nombre={item.nombre} categoria={item.category} id={item.id} img={item.img} />
                </Card>
            ))}
        </div>
    )
}

export default ItemList;
