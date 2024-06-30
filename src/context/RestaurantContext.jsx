import React, { useState, createContext } from 'react';

// Create a context for the restaurants
export const RestaurantContext = createContext();

// Create a context provider component
export const RestaurantContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([]); // Initial state is an empty array
    const [selectedRestaurant, setSelectedRestaurant] = useState(null); 
    const addRestaurants = (restaurant)=>{
        setRestaurants([...restaurants, restaurant]);
    }

    return (
        <RestaurantContext.Provider value={{ restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRestaurant }}>
            {props.children}
        </RestaurantContext.Provider> 
    );
};