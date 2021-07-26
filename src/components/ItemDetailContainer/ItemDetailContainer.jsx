import React, {useState, useEffect} from 'react'
import { getItems } from './getItems'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    useEffect(() =>{
        getItems()
        .then(resp=> setItem(resp))
    },[])


    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer
