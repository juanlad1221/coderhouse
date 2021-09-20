const Products = [
    {
        id:1,
        name:'Alimento p/Perros',
        price:250,
        img:'',
        category:'food'
    },
    {   
        id:2,
        name:'Alimento p/Gatos',
        price:350,
        img:'',
        category:'food'
    },
    {
        id:3,
        name:'Almoadones p/Mascotas',
        price:1550,
        img:'',
        category:'food'
    },
    {
        id:4,
        name:'Hueso p/roer',
        price:2550,
        img:'',
        category:'toys'
    },
    {
        id:5,
        name:'Vestido p/perros',
        price:550,
        img:'',
        category:'dress'
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


