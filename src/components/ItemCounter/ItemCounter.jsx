import React, { useState } from 'react'
import './ItemCounter.css'

export default function ItemCounter() {
    const [count, setCount] = useState(0)

    const handleAddCounter = (nro) => {
        nro = nro + 1
        setCount(nro)
    }
    const handleRemoveCounter = (nro) => {
        if (nro > 0) {
            nro = nro - 1
        } else {
            setCount(0)
            alert('ERROR: No Puede haber Cantidad Negativa...')
        }

        setCount(nro)
    }

    return (
        <div className='container d-flex justify-content-center mt-5'>
            <div className='counter ancho'>
                <button className='btn btn-warning' onClick={() => handleRemoveCounter(count)}>-</button>
                <h5>{count}</h5>
                <button className='btn btn-warning' onClick={() => handleAddCounter(count)}>+</button>
            </div>
        </div>
    )
}
