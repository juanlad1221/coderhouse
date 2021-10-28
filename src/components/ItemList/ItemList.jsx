import './ItemList.css'
import Item from '../Item/Item'


export default function ItemList({data}) {
    
    return (
            data.map((array, index) => <Item key={index} dato={array} />)
    )
}

