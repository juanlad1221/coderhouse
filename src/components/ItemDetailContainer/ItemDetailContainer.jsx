import {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {DataProduct as getItem} from "../Data/Data"


export default function ItemDetailContainer() {
    const [data, setData] = useState({})

    useEffect(() => {
        getItem.
        then((resp) => {setData(resp)})
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <ItemDetail product={data}/>
        </div>
    )
}

