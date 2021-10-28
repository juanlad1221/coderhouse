import './ItemDetail.css'
import ItemCounter from '../ItemCounter/ItemCounter'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext'




export default function ItemDetail(product) {
    const [btncart, setBtncart] = useState(false)

    //Extraigo addItem de el context
    const { addItem } = useContext(CartContext)

    function addOn(data) {

        setBtncart(true)
        addItem({
            id: product.product.id,
            name: product.product.name,
            price: product.product.price,
            quantity: data,
            category: product.product.category,
            description: ''
        })
    }


    return (
        <div className='detail-container'>

            <div className='img-card'>
                <img src={product.product.img} alt="" />
                <h1 className='title-img'>{product.product.name}</h1>
                <h5>{'$' + product.product.price}</h5>

                {
                    btncart ?
                        <>
                            <Link to='/cart'>
                                <button className='btn-go btn'>Finalize Purchase</button>
                            </Link>
                            <Link to='/'>
                                <button className='btn-go btn'>Continue Buying</button>
                            </Link>
                        </>
                        :
                        <ItemCounter initial={0} stock={product.product.stock} addOn={addOn} />
                }
            </div>


            <div className='description'>

                <p className='text-description'>{product.product.description}</p>

                <div className='select-container'>
                    <select name="talle">
                        <option value="value1" selected disabled>Talle</option>
                        <option value="value2">X</option>
                        <option value="value3">L</option>
                    </select>

                    <select className='select2' name="color">
                        <option value="value1" selected disabled>Color</option>
                        <option value="value2">Rojo</option>
                        <option value="value3">Verde</option>
                    </select>

                    <h5 className='stock-style'>Stock: {product.product.stock}</h5>
                </div>

            </div>

        </div>
    )
}
