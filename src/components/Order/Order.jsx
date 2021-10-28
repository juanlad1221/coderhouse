import './Order.css'
import {useContext, useState} from 'react'
import Row2 from '../Row2/Row2'
import Validate from '../../Helpers/ReactValidate'
import Ticket from '../../components/Ticket_order/Ticket_order'
import {Link} from 'react-router-dom'
import {db} from '../../Service/getFirebase'
import {collection, addDoc} from "firebase/firestore";
import {CartContext} from '../../CartContext/CartContext'
import {makeOrder} from '../../Helpers/Helpers'
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';



export default function Order() {
    const auth = getAuth();
    const [user] = useAuthState(auth);
    const [ticket, setTicket] = useState('')
    const [showTicket, setShowTicket] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const {items, setItems, totalBuy, cleanCart} = useContext(CartContext)

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

        if (Validate.Precense(name)
            && Validate.Numeric(phone) && Validate.Precense(phone)
            && Validate.Email(email) && Validate.Precense(email)
            && Validate.Email(email2) && Validate.Precense(email2)) {
            try {
                const docRef = await addDoc(collection(db, "orders"), makeOrder(items, name, phone, email, totalBuy))
                if (docRef.id) {
                    setTicket(docRef.id)
                    setShowTicket(true)
                    cleanInputs()
                }

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        } else {
            alert('ERROR: VERIFY THE DATA IN THE FORM...')
            return
        }
    }

   

    return (
        <div className='container-order'>
            {
                showTicket ?
                    <h1>Order</h1>
                    :
                    <h1>Make Order</h1>
            }

            <div className='order'>
                {
                    showTicket ?
                        <Ticket id_order={ticket} />
                        :
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
                                            <td className='total' colSpan='2'><strong>{`TOTAL: $${totalBuy}`}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='order-form'>
                                <form id='form-order'>
                                    <div className="group"><input autocomplete="off" onChange={(e) => handleName(e)} type="text" required="required" /><span></span><span className="bar"></span><label>Name</label></div>

                                    <div className="group"><input autocomplete="off" onChange={(e) => handlePhone(e)} type="text" required="required" /><span></span><span className="bar"></span><label>Phone</label></div>

                                    <div className="group"><input autocomplete="off" value={user?user.email:''} onChange={(e) => handleEmail(e)} type="text" required="required" /><span></span><span className="bar"></span><label>Email</label></div>

                                    <div className="group"><input autocomplete="off" value={user?user.email:''} onChange={(e) => handleEmail2(e)} type="text" required="required" /><span></span><span className="bar"></span><label>Email 2</label></div>
                                    <br />
                                    <button className='btn btn-send' onClick={handleSend}>Send</button>
                                </form>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
