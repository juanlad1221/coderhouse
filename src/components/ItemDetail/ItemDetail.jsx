import {useState} from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css'
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



export default function ItemDetail(product) {
    const [btncart, setBtncart] = useState(false)


    function addOn(data) {
        setBtncart(true)
    }
    
   
    return (
        <div className='container d-flex flex-column align-items-center'>
            <div className='card-detail'>

                <div>
                    <img src="https://ardiaprod.vteximg.com.br/arquivos/ids/204442-500-500/Alimento-para-Perros-Dogui-Carne-con-Vegetales-27-Kg-_1.jpg?v=637593460873670000" alt="" />

                    <div className='detail-name-price'>
                        <h5>{product.product.name}</h5>
                        <p>{'$' + product.product.price}</p>
                    </div>

                    {
                        btncart ?
                            <>
                                <Link to='/cart'>
                                    <button className='btn-go-to-cart btn'>Go to Cart</button>
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

        </div>
    )
}
