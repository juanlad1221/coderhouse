import './Pay.css'
import { useContext } from 'react'
import {CartContext} from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'






export default function Pay() {
    const {cleanCart} = useContext(CartContext)
    



    return (
        <div className='pay-container'>
            <p>Haga su pago aquí...</p>
            <Link to='/'>
            <button className='btn' onClick={cleanCart}>Clean Cart</button>
            </Link>   
        </div>
    )
}
