const Products = [
    {
        name:'Alimento p/Perros',
        price:250,
        img:''
    },
    {
        name:'Alimento p/Gatos',
        price:350,
        img:''
    },
    {
        name:'Almoadones p/Mascotas',
        price:1550,
        img:''
    },
    {
        name:'Bebedero',
        price:2550,
        img:''
    },
    {
        name:'Correas p/mascotas',
        price:550,
        img:''
    }
]



export  const DataProducts = new Promise((resolve, reject) => {
    let status = 200 
    
    if(status === 200){
        setTimeout(function(){
            resolve(Products)
        }, 3000)
    }else{
        reject('Error')
    }
})



export const DataProduct = new Promise((resolve, reject) => {
    let status = 200 
    
    if(status === 200){
        setTimeout(function(){
            resolve(Products[0])
        }, 2000)
    }else{
        reject('Error')
    }
})


