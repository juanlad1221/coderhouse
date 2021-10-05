import { useEffect, useState } from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'
import { DataProducts as getItems } from '../Data/Data'
import { useParams } from 'react-router'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { db } from '../../Service/getFirebase'
import { collection, getDocs, query, onSnapshot, where } from "firebase/firestore";






export default function ItemList() {
    //const { loading, setLoading } = useContext(CartContext)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { idCategory } = useParams()



    useEffect(() => {

        const getAll = () => {

            const q = query(collection(db, 'items'))
            const unsub = onSnapshot(q, (querySnapshot) => {
                let arr = []
                querySnapshot.forEach(doc => {
                    arr.push(doc.data())
                })
                setData(arr)
                setLoading(false)
            })

            return () => unsub
        }//end getAll     

        const getCategory = async () => {

            const q = query(collection(db, "items"), where("category", "==", idCategory));

            const querySnapshot = await getDocs(q)
            let arr = []
            querySnapshot.forEach((doc) => {
                arr.push(doc.data())

            });
            setData(arr)
            setLoading(false)
        }//end getCategory        


        if (idCategory) {
            getCategory()
        } else {
            getAll()
        }

        /*if(idCategory){
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
        }*/

    }, [idCategory])//useefect



    return (

        loading ?
            <div className='load-container'>
                <Loading />
            </div>
            :
            <div className='list-container'>
                {
                    data.map((array, index) => <Item key={index} dato={array} />)
                }
            </div>
    )
}

