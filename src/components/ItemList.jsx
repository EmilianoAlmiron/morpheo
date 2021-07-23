import React from 'react'
import { useState, useEffect } from 'react'


function ItemList() {
    const [itemList, SetItemList] = useState([])
    useEffect(() => {
        const items = [
            { id: '0001', nombre: 'Tribeka' },
            { id: '0002', nombre: 'Degel' },
            { id: '0002', nombre: 'Unity' },
            { id: '0002', nombre: 'Sisifo' },
            { id: '0002', nombre: 'Manigoldo' },
        ]
        const getPromiseTask = () => {
            return task
        }

        const task = new Promise((resuelto, rechazado) => {
            let status = 200
            if (status === 200) {
                setTimeout(() => {
                    resuelto(items)
                }, 2000)
            } else {
                rechazado('rechazado')
            }
        })
        getPromiseTask()
            .then((resp) => SetItemList(resp))
            .catch(err => { console.log('un error') })

    }, [])
    console.log(itemList)
    
    return (
        <div>
            <ul>
                {itemList.map((item) => <li key={item.id}>{item.nombre}</li>)}
            </ul>
        </div>
    )
}

export default ItemList;