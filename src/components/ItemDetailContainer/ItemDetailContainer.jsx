import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getMocks } from './getMocks' 


function ItemDetailContainer() {
    const [item, setItem] = useState([])

    const {id} = useParams()

    useEffect(() => {
      getMocks()
       .then(resp => setItem(resp))
    }, [])

    console.log(id);
    return (
        <>
          <ItemDetail item={item}/>  
        </>
    )
}

export default ItemDetailContainer
