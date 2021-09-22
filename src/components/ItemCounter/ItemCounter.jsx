import React, { useState } from 'react'
import './ItemCounter.css'

export default function ItemCounter({ stock, initial, addOn }) {
    const [count, setCount] = useState(initial)

    const handleAddCounter = (nro) => {
        if (count < stock) {
            setCount(nro + 1)
        } else {
            alert('ERROR: El Stock NO Puede Superarse...')
        }
    }
    const handleRemoveCounter = (nro) => {
        if (nro > 0) {
            setCount(nro - 1)
        } else {
            setCount(0)
            alert('ERROR: No Puede haber Cantidad Negativa...')
        }
    }
    const handleAdd = () => {
        if (count === 0) {
            alert('Error: Debe seleccionar una Cantidad...')
            return
        } else {
            addOn(count) 
        }
    }

    return (
        <>
            <div className='counter'>
                <button className='btn btn-warning' onClick={() => handleRemoveCounter(count)}><strong>-</strong></button>
                <h5>{count}</h5>
                <button className='btn btn-warning' onClick={() => handleAddCounter(count)}><strong>+</strong></button>
            </div>

            <button className='btn btn-secondary btn-anchor' onClick={handleAdd}>Add</button>
        </>
    )
}
