import { useState, useEffect } from "react"
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router"
import Loading from '../Loading/Loading'
import { db } from '../../Service/getFirebase'
import { collection, getDocs, where, query } from "firebase/firestore";




export default function ItemDetailContainer() {
    const [data, setData] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const getOne = async () => {
            const q = query(collection(db, "items"), where("id", "==", id));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot.docs[0].data())
            setData(querySnapshot.docs[0].data())
            setLoading(false)
        }

        getOne()

    }, [id])


    return (
        loading ?
            <Loading />
            :
            <div className='ItemDetail-container'>
                <ItemDetail product={data} />
            </div>


    )
}

