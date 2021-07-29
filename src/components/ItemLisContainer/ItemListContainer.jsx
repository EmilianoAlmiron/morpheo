import React from 'react'
import ItemList from './ItemList'


const ItemListContainer = (props) => {
    const{greeting, user}= props
    return (
        <div>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer


