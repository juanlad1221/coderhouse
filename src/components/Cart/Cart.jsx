import './Cart.css'
import Row from '../Row/Row'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../CartContext/CartContext'


export default function Cart() {
    const {items, removeItem, Total, totalBuy, cartEmpty, cleanCart, user } = useContext(CartContext)
    const [loading, setLoading] = useState(true)
    const [showBack, setShowBack] = useState(false)
    


    useEffect(() => {

        //loading
        setTimeout(() => {
            setLoading(false)
        }, 2000)

        //controla el texto no items
        if (cartEmpty()) {
            setShowBack(true)
        } else {
            setShowBack(false)
        }
    }, [items])


    return (

        loading ?
            <Loading />
            :

            <div className='table-container' onChange={Total()}>
                <h1 className='cart-title'>Cart</h1>

                <div className='table-layout'>
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
                                items.map((e, index) => <Row key={index} id={e.id} name={e.name} price={e.price} quantity={e.quantity} category={e.category} remove={removeItem} />)
                            }

                            <tr>
                                <td className='total'><strong>{`TOTAL: $${totalBuy}`}</strong></td>
                                {
                                    showBack?
                                        <td className='total' colSpan='5'>No items</td>
                                        :
                                        <td className='total' colSpan='5'><button onClick={cleanCart} className='btn'>Delete All</button></td>
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='button-container'>


                    <Link to='/'>
                        <button className='btn'>Go to Buy...</button>
                    </Link>

                    {
                        user?
                            !showBack&&
                                <Link to='/order'>
                                    <button className='btn'>Make Order...</button>
                                </Link>
                        :
                            <Link to='/login'>
                                <button className='btn'>Login...</button>
                            </Link>
                    }
                </div>

            </div>
    )
}
