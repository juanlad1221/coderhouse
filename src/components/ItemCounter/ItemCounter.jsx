import React, { useState } from 'react'
import './ItemCounter.css'

export default function ItemCounter({ stock, initial, addOn }) {
    const [count, setCount] = useState(initial)
    
    const handleAddCounter = (nro) => {
        if(count < stock){
            nro = nro + 1
            setCount(nro)
        }else{
            alert('ERROR: El Stock NO Puede Superarse...')
        }
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
            <div className='card'>
                <div className='counter'>
                    <button className='btn btn-warning' onClick={() => handleRemoveCounter(count)}>-</button>
                    <h5>{count}</h5>
                    <button className='btn btn-warning' onClick={() => handleAddCounter(count)}>+</button>
                </div>
                <button className='btn btn-secondary' onClick={()=> addOn(count)}>Add</button>
            </div>
        </div>
    )
}
