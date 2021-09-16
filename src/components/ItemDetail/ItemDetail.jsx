import React from 'react'
import './ItemDetail.css'



export default function ItemDetail(product) {
    
    return (
        <div className='card-detail'>
            <img src="https://ardiaprod.vteximg.com.br/arquivos/ids/204442-500-500/Alimento-para-Perros-Dogui-Carne-con-Vegetales-27-Kg-_1.jpg?v=637593460873670000" alt="" />

            <div className='detail-name-price'>
                <h5>{product.product.name}</h5>
                <p>{'$' + product.product.price}</p>
            </div>
            <div className='detail-description'>
                <p>Lorem ipsum dolor, sit amet ere illum velit animi. Tempore, non repellendus minus fugit quidem corporis iusto consequuntur dolorem temporibus commodi ducimus officiis porro!</p>
            </div>
        </div>
    )
}
