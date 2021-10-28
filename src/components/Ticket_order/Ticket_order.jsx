import './Ticket_order.css'
import {Link} from 'react-router-dom'



export default function Ticket_order({id_order}) {
    return (
        <div className='ticket-container'>
            <h5>YOUR ORDER ID NUMBER IS:</h5>
            <h1>{id_order}</h1>
            <Link to='/'>
                <button className='btn'>Home</button>
            </Link>
        </div>
    )
}
