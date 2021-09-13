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
        <div className='d-flex flex-wrap p-5 justify-content-center'>
            {
            data.map((array) => <Item dato={array}/>)
            }
        </div>
    )
}

