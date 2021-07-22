import React from 'react'
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react'

const handleCount=(cant)=>{
    alert('Vas a comprar: ' + cant)
}

const ItemListContainer = (props) => {
    const [itemList, SetItemList]= useState([])
    
    useEffect(()=>{
        const items=[
            {id:'0001', nombre:'Tribeka'},
            {id:'0002', nombre:'Degel'}
        ]
        const getPromiseTask=()=>{
            return task
        }
    
        const task = new Promise((resuelto, rechazado)=>{
            let status=200
            if(status===200){
                setTimeout(()=>{
                    resuelto(items)
                },3000)
            }else{
                rechazado('rechazado')
            }
        })
        getPromiseTask()
        .then((resp)=>SetItemList(resp))
        .catch(err=>{console.log('un error')})

    },[])
 console.log(itemList)

    const{greeting, user}= props
    return (
        <div>
            <h1 className='greeting'>{greeting}</h1>
            <h2 className='user'>{user}</h2>
            <ItemCount stock={10} initial={1} onAdd={handleCount}/>
            <ul>
            { itemList.map((item)=><li key={item.id}>{item.nombre}</li>) }
            </ul>
        </div>
    )

}

export default ItemListContainer


