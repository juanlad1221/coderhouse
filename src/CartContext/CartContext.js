import { createContext, useState} from "react";
import { getAuth} from "firebase/auth";
import { useAuthState} from 'react-firebase-hooks/auth';
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
    const [cantBagde, setCantBagde] = useState(0)
    const [totalBuy, setTotalBuy] = useState(0)
    const auth = getAuth();
    const [user] = useAuthState(auth);
  

    const logout = () => {
      auth.signOut();
    }

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

    
    
  return (
    <CartContext.Provider value={{ 
    isLoged, 
    items,
    cantBagde,
    totalBuy,
    user,
    setIsLoged,
    setItems,
    Total,
    Bagde,
    addItem,
    removeItem,
    cartEmpty,
    cleanCart,
    makeLogin,
    logout,
     }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

