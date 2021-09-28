import { useEffect, useState } from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'
import {DataProducts as getItems} from '../Data/Data'
import { useParams } from 'react-router'
import { useContext} from 'react'
import {CartContext} from '../CartContext/CartContext'






export default function ItemList() {
    const {loading, setLoading} = useContext(CartContext)
    const[data, setData] = useState([])
    const {idCategory} = useParams()
    
    
    useEffect(() => {
        
        if(idCategory){
            getItems
            .then((resp) => {
                setData(resp.filter(e => e.category === idCategory))
            })
            .catch((err) => console.log(err))
            .finally(()=>{setLoading(false)})
        }else{
            getItems
            .then((resp) => {
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

