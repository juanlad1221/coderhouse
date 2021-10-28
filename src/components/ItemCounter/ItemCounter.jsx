import { useState } from 'react'
import './ItemCounter.css'


export default function ItemCounter({ stock, initial, addOn }) {
    const [count, setCount] = useState(initial)
    

    const handleAddCounter = (nro) => {
        if (count < stock) {
            setCount(nro + 1)
        } else {
            alert('ERROR: Stock Can not Be Exceeded...')
        }
    }
    const handleRemoveCounter = (nro) => {
        if (nro > 0) {
            setCount(nro - 1)
        } else {
            setCount(0)
            alert('ERROR: There can be no Negative Quantity...')
        }
    }
    const handleAdd = () => {
        if (count === 0) {
            alert('ERROR: You must select a Quantity... ')
            return
        } else {
            console.log(stock)
            console.log(count)
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

            <button className='btn btn-anchor' onClick={handleAdd}>Add</button>
        </>
    )
}
