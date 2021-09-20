import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css'
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



export default function ItemDetail(product) {

    function addOn(data) { console.log(data) }
    console.log(product)

    return (
        <div className='container d-flex flex-column align-items-center'>
            <div className='card-detail'>

                <div>
                    <img src="https://ardiaprod.vteximg.com.br/arquivos/ids/204442-500-500/Alimento-para-Perros-Dogui-Carne-con-Vegetales-27-Kg-_1.jpg?v=637593460873670000" alt="" />

                    <div className='detail-name-price'>
                        <h5>{product.product.name}</h5>
                        <p>{'$' + product.product.price}</p>
                    </div>

                    <ItemCounter initial={0} stock={5} addOn={addOn} />
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

            {/*<div className='card-movil'>

                <div className='card-detail-2'>
                    <img src="https://ardiaprod.vteximg.com.br/arquivos/ids/204442-500-500/Alimento-para-Perros-Dogui-Carne-con-Vegetales-27-Kg-_1.jpg?v=637593460873670000" alt="" />

                    <div className='detail-name-price'>
                        <h5>{product.product.name}</h5>
                        <p>{'$' + product.product.price}</p>
                    </div>

                    <ItemCounter initial={0} stock={5} addOn={addOn} />
                </div>

            </div>*/}

        </div>
    )
}
