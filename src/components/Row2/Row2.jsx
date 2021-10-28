

export default function Row({key, name, quantity}) {

    
    return (
        <tr key={key}>
            <td data-label='name'>{name}</td>
            <td data-label='quantity'>{quantity}</td> 
        </tr>
    )
}
