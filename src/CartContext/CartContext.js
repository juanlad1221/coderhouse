import { createContext, useState} from "react";
import {deleteObjectInArrayById, 
  TotalBuy, 
  sumValuesInObjectArray,
  existObjectInArray,
  sumQuantity} from '../Helpers/Helpers'




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

      if(!isInCart(item)){
        setItems([...items, item])
      }else{
       setItems(sumQuantity(items, 'id', item.id, item.quantity))
      }
      Bagde()
      
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

    const cleanCart = (flag) => {
      if(flag){
        if (window.confirm("Do you really want to Delete all Items...")) {
          setItems([])
          setTotalBuy(0)
        }
      }else{
        setItems([])
        setTotalBuy(0)
      }
      
    }

    const isInCart = (item) =>{
      return existObjectInArray(items, 'id', item.id)
    }

    const makeLogin = () =>{
      localStorage.setItem('login', true)
      setIsLoged(true)
    }

    const logOut = () =>{
      setIsLoged(false)
    }
    
  return (
    <CartContext.Provider value={{ 
    isLoged, 
    items,
    cantBagde,
    loading,
    totalBuy,
    setItems,
    Total,
    setLoading,
    Bagde,
    setIsLoged,
    addItem,
    removeItem,
    cartEmpty,
    cleanCart,
    makeLogin,
    logOut }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

