const item={
    nombre:'Sisifo',
    precio: '$1400'
}

const task = new Promise((res)=>{
    res(item)
},2000)

export const getItems=()=>{
    return(
        task
    )
}