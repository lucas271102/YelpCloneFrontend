import React,{useState, createContext} from 'react'

const RestaurantsContext = createContext() 
export const RestaurantsContextProvider = props =>{
    const [restaurantList, setRestaurantList]= useState([])
    return (
        <RestaurantsContext.Provider value={{restaurantList, setRestaurantList}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}


export default RestaurantsContext