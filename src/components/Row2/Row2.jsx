

export default function Row({key, name, quantity}) {

    
    return (
        <tr key={key}>
            <td>{name}</td>
            <td>{quantity}</td> 
        </tr>
    )
}
