import { useState, useEffect } from "react"
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { DataProducts as getItems } from '../Data/Data'
import { useParams } from "react-router"
import Loading from '../Loading/Loading'





export default function ItemDetailContainer() {
    const [data, setData] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
       
        getItems
            .then((resp) => { setData(resp.find(e => e.id === Number(id))) })
            .catch((err) => console.log(err))
            .finally(()=> {
                setTimeout(()=>{
                    setLoading(false)
                }, 2000)
            })
    }, [id])


    return (
        <div className='ItemDetail-container'>
            {
                loading ?
                <Loading /> 
                :
                <ItemDetail product={data} />
            }
        </div>

        
    )
}

