import { useEffect, useState } from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import DataProducts from '../Data/Data'




export default function ItemList() {
    const[data, setData] = useState([])

    useEffect(() => {
        DataProducts.
        then((resp) => {setData(resp)})
        .catch((err) => console.log(err))
      }, [])
   
    return(
        
        <div className='list-container'>
           
            {
            data.map((array, index) => <Item key={index} dato={array}/>)
            }
            
        </div>
        
    )
}

