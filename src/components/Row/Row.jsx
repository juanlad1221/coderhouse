import './Row.css'
import { FaRegTrashAlt } from 'react-icons/fa'


export default function Row({key, id, name, price, quantity, category, remove}) {

    
    return (
        <tr key={key}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{`$ ${price}`}</td> 
            <td>{quantity}</td>
            <td><FaRegTrashAlt className='icon-trash' onClick={()=>remove(id)}/></td>
        </tr>
    )
}
