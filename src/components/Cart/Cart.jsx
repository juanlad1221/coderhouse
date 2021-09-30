import './Cart.css'
import { useContext, useState, useEffect} from 'react'
import { CartContext } from '../../CartContext/CartContext'
import Row from '../Row/Row'
import Loading from '../Loading/Loading'
import {Link} from 'react-router-dom'


export default function Cart() {
    const {items, removeItem, Total, totalBuy, cartEmpty, cleanCart, isLoged} = useContext(CartContext)
    const [loading, setLoading] = useState(true)
    const [showBack, setShowBack] = useState(false)
    const [url, setUrl] = useState('')


    const isLogged = () =>{
        {/*let login = localStorage.getItem('login')*/}
        if(isLoged){
            setUrl('/pay')
        }else{
            setUrl('/login')
        }
    }
    const cleanLogin = () =>{
        localStorage.removeItem('login')
    }

    useEffect(() => {

        setTimeout(()=>{
            setLoading(false)
        }, 2000)

        Total()
        isLogged()

        if(cartEmpty()){
            setShowBack(true)
            
        }else{
            setShowBack(false)
            
        }
        
    },[items])
    
    
    return (
        
        loading?
            <Loading/>
        :

        <div className='table-container'>
            <h1 className='cart-title'>Cart</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CATEGOTY</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((e,index)=> <Row key={index} id={e.id} name={e.name} price={e.price} quantity={e.quantity} category={e.category} remove={removeItem}/>)
                    }
                    
                    <tr>
                        <td><strong>{`Total: $${totalBuy}`}</strong></td>
                        {
                            showBack ?
                                <td colSpan='5'>No items</td>
                            :
                                <td colSpan='5'><button onClick={cleanCart} className='btn'>Deleste All</button></td>
                        }
                    </tr>
                </tbody>
            </table>
 
            {
                showBack ?
                <Link to='/'>
                    <button className='btn button-pay'>Go to Buy</button>
                </Link>
                :
                <Link to={url}>
                    <button className='btn button-pay'>Pay</button>
                </Link>
            }
            
        </div>
    )
}
