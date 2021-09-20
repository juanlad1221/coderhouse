import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from '../ItemCounter/ItemCounter'
import './Item.css'




export default function Item({dato}) {
    const[count, setCount] = useState(0)

    function addOn(data){console.log(data)}
    

    return(
    <div className='card-product'>
        <img src="https://ardiaprod.vteximg.com.br/arquivos/ids/204442-500-500/Alimento-para-Perros-Dogui-Carne-con-Vegetales-27-Kg-_1.jpg?v=637593460873670000" />
        
        <div className='title-card'> 
            <strong>{dato.name}</strong>
        </div>
        
        <Link to={`/item/${dato.id}`}>
            <button className='btn btn-primary btn-anchor'>Detail</button>
        </Link>
        
        <ItemCounter initial={0} stock={5} addOn={addOn} />
    </div>
    )
}