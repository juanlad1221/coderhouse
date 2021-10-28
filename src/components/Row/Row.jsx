import './Row.css'
import { FaRegTrashAlt } from 'react-icons/fa'


export default function Row({key, id, name, price, quantity, category, remove}) {

    
    return (
        <tr key={key}>
            <td data-label='id'>{id}</td>
            <td data-label='name'>{name}</td>
            <td data-label='category'>{category}</td>
            <td data-label='price'>{`$ ${price}`}</td> 
            <td data-label='quantity'>{quantity}</td>
            <td data-label='action'><FaRegTrashAlt className='icon-trash' onClick={()=>remove(id)}/></td>
        </tr>
    )
}
