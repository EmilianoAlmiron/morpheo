const item=[{
    id: '0001',
    nombre: 'Sisifo',
    category:'tabaco',
    detalle:'Rico sabor a tabaco americano'
},
{ 
    id: '0002', 
    nombre: 'Tribeka', 
    category:'tabaco',
    detalle:'El mejor tabaco de todos, con un toque de galletita junto a un tostado caracteristico del tabaco acaramelado.'
},
{ 
    id: '0003', 
    nombre: 'Degel',  
    category:'frutales',
    detalle:'El exelente sabor a arandanos, frutilla y menta, no te quedes sin probarlo.'
},
{ 
    id: '0004', 
    nombre: 'Unity',  
    category:'frutales',
    detalle:'Que mas decir!!!! Frutilla con crema.....para usarlo todos los dias.'
},
{ 
    id: '0005', 
    nombre: 'Manigoldo',  
    category:'frutales',
    detalle:'Lima Limon, o como todos le dicen Sprite...Resfrescante....'
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