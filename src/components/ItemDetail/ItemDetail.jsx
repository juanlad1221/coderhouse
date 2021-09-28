import { useState, useContext } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css'
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext'
import { existObjectInArray } from '../../Helpers/Helpers'



export default function ItemDetail(product) {
    const [btncart, setBtncart] = useState(false)
    //Extraigo addItem de el context
    const { addItem, items } = useContext(CartContext)

    function addOn(data) {

        if (!existObjectInArray(items, 'id', product.product.id)) {
            setBtncart(true)
            addItem({
                id: product.product.id,
                name: product.product.name,
                price: product.product.price,
                quantity: data,
                category: product.product.category,
                description: ''
            })
        } else {
            alert('ATTENTION: You can not Add more Units of the Product...')
            return
        }
    }


    return (
        <div className='card-detail'>

            <div className='card-img'>
                <img src={product.product.img} alt="" />

                <div className='detail-name-price'>
                    <h5>{product.product.name}</h5>
                    <p>{'$' + product.product.price}</p>
                </div>

                {
                    btncart ?
                        <>
                            <Link to='/cart'>
                                <button className='btn-go-to-cart btn'>Finalize Purchase</button>
                            </Link>
                            <Link to='/'>
                                <button className='btn-go-to-cart btn'>Continue Buying</button>
                            </Link>
                        </>
                        :
                        <ItemCounter initial={0} stock={5} addOn={addOn} />
                }

            </div>

            <div className='detail-description'>
                <div className='icon-container'>
                    <Link to='/'>
                        <BsFillCaretLeftFill className='icon-detail' />
                    </Link>
                </div>

                <p className='color-text'>Lorem ipsum dolor, sit amet ere illum velit animi. Tempore, non repellendus minus fugit quidem corporis iusto consequuntur dolorem temporibus commodi ducimus officiis porro!</p>
            </div>


        </div>
    )
}
