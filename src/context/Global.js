import React,{useState,createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const [cart, setcart] = useState([])
    
    
    return(
        <CartContext.Provider value={[cart,setcart]}>
            {children}
        </CartContext.Provider>
    )
}