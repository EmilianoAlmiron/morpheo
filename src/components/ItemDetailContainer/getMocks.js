import sisifo from '../imagenes/sisifo.jpg'
import tribeka from '../imagenes/tribeka.jpg'
import degel from '../imagenes/degel.jpg'
import unity from '../imagenes/unity.jpg'
import manigoldo from '../imagenes/manigoldo.jpg'


const items=[{
    id: '0001',
    nombre: 'Sisifo',
    category:'tabaco',
    detalle:'Rico sabor a tabaco americano',
    ml:'120ml',
    img:sisifo
},
{ 
    id: '0002', 
    nombre: 'Tribeka', 
    category:'tabaco',
    detalle:'El mejor tabaco de todos, con un toque de galletita junto a un tostado caracteristico del tabaco acaramelado.',
    ml:'120ml',
    img:tribeka
},
{ 
    id: '0003', 
    nombre: 'Degel',  
    category:'frutales',
    detalle:'El exelente sabor a arandanos, frutilla y menta, no te quedes sin probarlo.',
    ml:'120ml',
    img:degel
},
{ 
    id: '0004', 
    nombre: 'Unity',  
    category:'frutales',
    detalle:'Que mas decir!!!! Frutilla con crema.....para usarlo todos los dias.',
    ml:'120ml',
    img:unity
},
{ 
    id: '0005', 
    nombre: 'Manigoldo',  
    category:'frutales',
    detalle:'Lima Limon, o como todos le dicen Sprite...Resfrescante....',
    ml:'120ml',
    img:manigoldo
}, 
]

const taskItems = new Promise((res)=>{
    setTimeout(() =>{
        res(items)
    },2000);
})

export const getMocksItems=()=>{
    return(
        taskItems
    )
}

const item={
    id: '0002', 
    nombre: 'Tribeka', 
    category:'tabaco',
    detalle:'El mejor tabaco de todos, con un toque de galletita junto a un tostado caracteristico del tabaco acaramelado.',
    ml:'120ml',
    img:tribeka
}

const task = new Promise((res)=>{
    
    res(item)
})

export const getMocks=()=>{
    return(
        task
    )
}