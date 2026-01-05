import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";

export const ShopContext = createContext();

const currency = '$';
const delivery_fee = 10;


const ShopContextProvider = (props)=>{
    const [search, setsearch] = useState('')
    const [showSearch, setshowSearch] = useState(false)
    const value = {
        products, currency, delivery_fee, search, setsearch, showSearch, setshowSearch
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider

