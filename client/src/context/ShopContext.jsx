import { createContext, useEffect } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const currency = "$";
const delivery_fee = 10;

const ShopContextProvider = (props) => {
  const [search, setsearch] = useState("");
  const [showSearch, setshowSearch] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const addtoCart = async (itemid, size) => {
    let cartData = structuredClone(cartItems);
    if (!size) {
        toast.error('Select Product Size')
        return;
    }
    if (cartData[itemid]) {
      if (cartData[itemid][size]) {
        cartData[itemid][size] += 1;
      } else {
        cartData[itemid][size] = 1;
      }
    } else {
      cartData[itemid] = {};
      cartData[itemid][size] = 1;
    }
    setcartItems(cartData);
  };

  const getCartCount = ()=>{
    let totalCount = 0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
          try {
            if(cartItems[items][item] > 0){
              totalCount += cartItems[items][item]
            }
          } catch (error) {
            
          }
      }
    }
    return totalCount
  }

  const updateQuantity = async(itemid, size, quantity)=>{
    let cartData = structuredClone(cartItems)
    cartData[itemid][size] = quantity;
    setcartItems(cartData)
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showSearch,
    setshowSearch,
    cartItems,
    addtoCart,
    getCartCount,
    updateQuantity
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
