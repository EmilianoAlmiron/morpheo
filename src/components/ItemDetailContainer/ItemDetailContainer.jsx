import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getMocks } from './getMocks' 


function ItemDetailContainer({match}) {
    const [item, setItem] = useState([])

    const id = useParams()

    useEffect(() => {
      getMocks()
       .then(resp => setItem(resp))
    }, [])

    return (
        <>
          <ItemDetail item={item} id={id}/>  
        </>
    )
}

export default ItemDetailContainer
