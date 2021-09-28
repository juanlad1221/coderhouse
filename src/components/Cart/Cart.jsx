import './Cart.css'
import { useContext, useState, useEffect} from 'react'
import {CartContext} from '../CartContext/CartContext'
import Row from '../Row/Row'
import Loading from '../Loading/Loading'
import {Link} from 'react-router-dom'


export default function Cart() {
    const {items, removeItem, Total, totalBuy, cartEmpty} = useContext(CartContext)
    const [loading, setLoading] = useState(true)
    const [showBack, setShowBack] = useState(false)



    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        }, 2000)

        Total()

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
                    </tr>
                </tbody>
            </table>
 
            {
                showBack ?
                <Link to='/'>
                    <button className='btn button-pay'>Back</button>
                </Link>
                :
                <button className='btn button-pay'>Pay</button>
            }
            
        </div>
    )
}
