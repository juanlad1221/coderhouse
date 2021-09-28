import { Link } from 'react-router-dom'
import './Item.css'




export default function Item({dato}) {
    
    return(
    <div className='card-product animate__animated animate__bounce'>
        
        <img src={dato.img} alt=''/>
        
        <div className='title-card'> 
            <strong>{dato.name}</strong>
        </div>
        
        <Link to={`/item/${dato.id}`}>
            <button className='btn btn-anchor'>Detail</button>
        </Link>
        
    </div>
    )
}