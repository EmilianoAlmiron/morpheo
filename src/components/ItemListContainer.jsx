import React from 'react'

const ItemListContainer = (props) => {
    const{greeting, user}= props
    return (
        <div>
            <h1 className='greeting'>{greeting}</h1>
            <h2 className='user'>{user}</h2>
        </div>
    )
}

export default ItemListContainer


