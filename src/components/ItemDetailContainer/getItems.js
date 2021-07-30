import sisifo from '../imagenes/sisifo.jpg'
import tribeka from '../imagenes/tribeka.jpg'
import degel from '../imagenes/degel.jpg'
import unity from '../imagenes/unity.jpg'
import manigoldo from '../imagenes/manigoldo.jpg'


const item=[{
    id: '0001',
    nombre: 'Sisifo',
    category:'tabaco',
    detalle:'Rico sabor a tabaco americano',
    img:sisifo
},
{ 
    id: '0002', 
    nombre: 'Tribeka', 
    category:'tabaco',
    detalle:'El mejor tabaco de todos, con un toque de galletita junto a un tostado caracteristico del tabaco acaramelado.',
    img:tribeka
},
{ 
    id: '0003', 
    nombre: 'Degel',  
    category:'frutales',
    detalle:'El exelente sabor a arandanos, frutilla y menta, no te quedes sin probarlo.',
    img:degel
},
{ 
    id: '0004', 
    nombre: 'Unity',  
    category:'frutales',
    detalle:'Que mas decir!!!! Frutilla con crema.....para usarlo todos los dias.',
    img:unity
},
{ 
    id: '0005', 
    nombre: 'Manigoldo',  
    category:'frutales',
    detalle:'Lima Limon, o como todos le dicen Sprite...Resfrescante....',
    img:manigoldo
}, 
]

const task = new Promise((res)=>{
    res(item)
},2000)

export const getItems=()=>{
    return(
        task
    )
}