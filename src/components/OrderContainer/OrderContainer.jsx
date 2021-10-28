import './OrderContainer.css'
import { useState, useEffect } from 'react'
import Order from '../Order/Order'
import Loading from '../Loading/Loading'


export default function OrderContainer() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //Para el loading
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    }, [])


    return (

        loading?
        <div className='loading-container'>
            <Loading/>
        </div>
        :
        <div className='order-container'>
            <Order/>
        </div>

    )
}
