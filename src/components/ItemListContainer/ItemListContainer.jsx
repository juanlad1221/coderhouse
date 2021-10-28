import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import Loading from '../Loading/Loading'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { db } from '../../Service/getFirebase'
import { collection, getDocs, query, onSnapshot, where } from "firebase/firestore";


export default function ItemListContainer() {
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
            })

            setData(arr)
            setLoading(false)
        }//end getCategory        


        if (idCategory) {
            getCategory()
        } else {
            getAll()
        }

    },[idCategory])

    return(
            loading?
                <Loading />
            :
                <div className='list-container'>
                    <ItemList data={data} />
                </div>
        )
}