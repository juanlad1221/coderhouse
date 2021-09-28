import { createContext, useState} from "react";
import {deleteObjectInArrayById, 
  TotalBuy, 
  sumValuesInObjectArray} from '../../Helpers/Helpers'




//Se crea el context
export const CartContext = createContext([]);


//Componente que devuelve el provider
 const CartContextProvider = ({ children }) =>{

    //Data a usar en la tabla
    const [items, setItems] = useState([])
    const [isLoged, setIsLoged] = useState(false)
    const [loading, setLoading] = useState(true)
    const [cantBagde, setCantBagde] = useState(0)
    const [totalBuy, setTotalBuy] = useState(0)


    const addItem = (item) =>{
      setItems([...items, item])
    }

    const removeItem = (id) =>{
      if (window.confirm("Do you really want to Delete this Item...")) {
        setItems(deleteObjectInArrayById(items, id))
      }
    }

    const Bagde = ()=>{
      setCantBagde(sumValuesInObjectArray(items, 'quantity'))
    }

    const Total = ()=>{
      setTotalBuy(TotalBuy(items))
    }
    
    const cartEmpty = () =>{
      if(items.length === 0){
        return true
      }else{
        return false
      }
    }

    
  

  return (
    <CartContext.Provider value={{ 
    isLoged, 
    items,
    cantBagde,
    loading,
    totalBuy,
    Total,
    setLoading,
    Bagde,
    setIsLoged,
    addItem,
    removeItem,
    cartEmpty }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

