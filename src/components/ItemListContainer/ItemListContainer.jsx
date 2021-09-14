import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import ItemCounter from '../ItemCounter/ItemCounter'


function addOn(data){console.log(data)}

export default function ItemListContainer() {

    return (
        <div className='container'>
            <ItemList />
            <ItemCounter initial={0} stock={5} addOn={addOn} />
        </div>
    )
}