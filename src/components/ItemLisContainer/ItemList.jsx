import React from 'react'
import Card from 'react-bootstrap/Card'
import Item from './Item';
import './ItemLis.css';

function ItemList({items}) {
    return (
        <div>
            {items.map((item) => (
                <Card className="listaProductos"  key={item.id}>
                    <Item nombre={item.nombre} categoria={item.category} id={item.id} img={item.img} />
                </Card>
            ))}
        </div>
    )
}

export default ItemList;
