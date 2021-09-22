import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Item.css'




export default function Item({dato}) {
    
    return(
    <div className='card-product animate__animated animate__bounce'>
        
        <img src="https://ardiaprod.vteximg.com.br/arquivos/ids/204442-500-500/Alimento-para-Perros-Dogui-Carne-con-Vegetales-27-Kg-_1.jpg?v=637593460873670000" />
        
        <div className='title-card'> 
            <strong>{dato.name}</strong>
        </div>
        
        <Link to={`/item/${dato.id}`}>
            <button className='btn btn-primary btn-anchor'>Detail</button>
        </Link>
        
    </div>
    )
}