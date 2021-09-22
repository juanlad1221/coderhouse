import { createContext, useState, useEffect } from "react";
//Fuente de dato local
//import data as getItems from '../Data/Data'




//Se crea el context
export const Context = createContext();


//Componente que devuelve el provider
const DataContext = ({ children }) => {

    //Data a usar en la tabla
    const [data, setData] = useState([])
    const [isLoged, setIsLoged] = useState(false)

    useEffect(()=>{
        
    },[])
  
  
  return (
    <Context.Provider value={{ isLoged, setIsLoged }}>
        {children}
    </Context.Provider>
  );
};

export default DataContext;