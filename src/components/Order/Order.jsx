import { useContext, useState, useEffect } from 'react'
import './Order.css'
import { Link, useHistory } from 'react-router-dom'
import Row2 from '../Row2/Row2'
import { db } from '../../Service/getFirebase'
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from '../../CartContext/CartContext'
import { makeOrder } from '../../Helpers/Helpers'



export default function Order() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const {makeLogin, items, setItems, totalBuy, cleanCart} = useContext(CartContext)

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleEmail2 = (e) => {
        setEmail2(e.target.value)
    }
    const cleanInputs = () => {
        setName('')
        setPhone('')
        setEmail('')
        setEmail2('')
        cleanCart(false)
        document.getElementById("form-order").reset();
    }
    const handleSend = async (e) => {
        e.preventDefault()

        if (email !== email2) {
            alert('ERROR: THE MAILS DO NOT MATCH...')
            cleanInputs()
            return
        }

        try {
            const docRef = await addDoc(collection(db, "orders"), makeOrder(items, name, phone, email, totalBuy))
            if (docRef.id) {
                alert(docRef.id)
                cleanInputs()
            }

        } catch (e) {
            console.error("Error adding document: ", e);
        }


    }


    useEffect(() => {

    }, [])


    return (

        <div className='order'>
            <div className='order2'>
                <div className='order-table'>

                    <Link to='/cart'>
                        <button className='btn btn-goCart'>Go to Cart...</button>
                    </Link>

                    <table>
                        <thead>
                            <tr>
                                <th className='th-product'>
                                    PRODUCTS
                                </th>
                                <th>
                                    QUANTITY
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((e, index) => <Row2 id={e.id} name={e.name} quantity={e.quantity} />)
                            }
                            <tr>
                                <td colSpan='2'><strong>{`TOTAL: $${totalBuy}`}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='order-form'>
                    <form id='form-order'>
                        <input onChange={(e) => handleName(e)} type='text' className='form-control' placeholder='name' />
                        <br />
                        <input onChange={(e) => handlePhone(e)} type='text' className='form-control' placeholder='phone' />
                        <br />
                        <input onChange={(e) => handleEmail(e)} type='text' className='form-control' placeholder='e-mail' />
                        <br />
                        <input onChange={(e) => handleEmail2(e)} type='text' className='form-control' placeholder='e-mail 2' />
                        <br /><br />
                        <button className='btn btn-send' onClick={handleSend}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
