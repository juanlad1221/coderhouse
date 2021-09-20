import {useState, useEffect} from "react"
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import {DataProducts as getItems} from '../Data/Data'
import { useParams } from "react-router"





export default function ItemDetailContainer() {
    const [data, setData] = useState([])
    const {id} = useParams()
    
    
    useEffect(() => {
        getItems.
        then((resp) => { setData(resp.find(e => e.id === Number(id))) })
        .catch((err) => console.log(err))
    }, [id])

   
    return (
        <div className='ItemDetail-container'>
            {
                <ItemDetail product={data}/>
            }
            
        </div>
    )
}

