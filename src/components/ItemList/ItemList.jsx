import { useEffect, useState } from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'
import {DataProducts as getItems} from '../Data/Data'
import { useParams } from 'react-router'




export default function ItemList() {
    const[data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()
    
    
    useEffect(() => {
        if(idCategory === 'toys'){setLoading(true)}
        
        if(idCategory){
            getItems.
            then((resp) => {
                setLoading(true)
                setData(resp.filter(e => e.category === idCategory))
            })
            .catch((err) => console.log(err))
            .finally(()=>{setLoading(false)})
        }else{
            getItems.
            then((resp) => {
                setData(resp)  
            })
            .catch((err) => console.log(err))
            .finally(()=>{setLoading(false)})
        }
        
    }, [idCategory])
   
    return(
        
        <div className='list-container'>
           
            {
                loading ?
                <Loading/>:
                data.map((array, index) => <Item key={index} dato={array}/>)
            }
            
        </div>
        
    )
}

