import { useState } from 'react'
import './Item.css'




export default function Item({dato}) {
    const[count, setCount] = useState(0)
    

    const handleAddCounter = (nro) => {
        nro = nro + 1
        setCount(nro)
    }
    const handleRemoveCounter = (nro) => {
        if(nro > 0){
            nro = nro - 1
        }else{
            setCount(0)
            alert('ERROR: No Puede haber Cantidad Negativa...')
        }
        
        setCount(nro)
    }

    
   
    return(
    <div className='card-product'>
        <img src="https://ardiaprod.vteximg.com.br/arquivos/ids/204442-500-500/Alimento-para-Perros-Dogui-Carne-con-Vegetales-27-Kg-_1.jpg?v=637593460873670000" />
        
        <div className='titulo-card'> 
            <strong>{dato.name}</strong>
        </div>

        <div className='counter'>
            <button className='btn btn-warning' onClick={()=> handleRemoveCounter(count)}>-</button>
            <h5>{count}</h5>
            <button className='btn btn-warning' onClick={() => handleAddCounter(count)}>+</button>
        </div>
        
        <button className='btn btn-secondary btn-anchor'>Add</button>
    </div>
    )
}