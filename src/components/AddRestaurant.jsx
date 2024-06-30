import React, { useContext, useState } from 'react'
import DineDiscover from "../apis/DineDiscover";
import { RestaurantContext } from '../context/RestaurantContext';

const AddRestaurant = () => {
    const {addRestaurants} = useContext(RestaurantContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");
    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await DineDiscover.post("/",{
                name:name,
                location:location,
                price_range:priceRange,
            });
            addRestaurants(response.data.data.restaurant);
            
        } catch (error) {
            
        }
    }

  return (//Note mb-4 means margin at the bottom for 4.
    <div className="mb-4"> 
        <form action="">
            <div className="form-row d-flex align-items-center">
                <div className="col" style={{marginLeft:"10px", marginRight:"10px"}}>
                    <input value={name} onChange={(event)=>{
                        setName(event.target.value);
                    }} className="form-control" type="text" placeholder="Name"/>
                </div>
                <div className="col" style={{marginLeft:"10px", marginRight:"10px"}}>
                    <input value={location} onChange={(event)=>{
                        setLocation(event.target.value);
                    }}  className="form-control" type="text" placeholder="Location"  /> 
                </div>
                <div className="col" style={{marginLeft:"10px", marginRight:"10px"}}>
                    <select value={priceRange} onChange={(event)=>{
                        setPriceRange(event.target.value);}} className="form-control select my-1 mr-sm-2">
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary" style={{marginLeft:"10px", marginRight:"10px"}}>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddRestaurant
