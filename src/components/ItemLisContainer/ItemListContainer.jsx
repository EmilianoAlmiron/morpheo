import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import { getMocksItems } from '../ItemDetailContainer/getMocks' 
import Spinner from 'react-bootstrap/Spinner'

const handleCount=(cant)=>{
    alert(`ud a agregado : ${cant}`)
}

function ItemListContainer() { 
    const [items, setItems] = useState([])//estado 
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const user = false

    useEffect(() => { 
        if(categoryId === undefined){
            getMocksItems()
            .then(resp=>{ 
                setItems(resp)                
                setLoading(false)
            })
        }else{
            getMocksItems()
            .then(resp=> setItems(resp.filter(it => it.category === categoryId)))
        }
    }, [categoryId])

    if(user){
        return <h1>Login</h1>
    }

    return (
        <div>

        { loading ? 
                <center>
                    <Spinner animation="border" role="status" className="mt-5">
                        <span className="visually-hidden"></span>
                    </Spinner>                    
                </center>
            : 
                <ItemList items={items} />
        }
         </div>
        
        
    )
}

export default ItemListContainer