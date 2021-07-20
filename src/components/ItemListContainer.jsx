import React from 'react'
import ItemCount from './ItemCount'

const handleCount=(cant)=>{
    alert('Vas a comprar: ' + cant)
}
const ItemListContainer = (props) => {
    const{greeting, user}= props
    return (
        <div>
            <h1 className='greeting'>{greeting}</h1>
            <h2 className='user'>{user}</h2>
            <ItemCount stock={10} initial={1} onAdd={handleCount}/>
        </div>
    )
}

export default ItemListContainer


