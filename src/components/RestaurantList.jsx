import React, { useEffect, useContext } from 'react';
import DineDiscover from "../apis/DineDiscover";
import { RestaurantContext } from '../context/RestaurantContext';
import {useNavigate} from "react-router-dom";
import Rating from "./Rating"

const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantContext);
    let navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DineDiscover.get("/");
                setRestaurants(response.data.data.restaurants);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [setRestaurants]);

    const handleDelete = async (e,id) => {
        e.stopPropagation();
        try {
            await DineDiscover.delete(`/${id}`);
            setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
        } catch (error) {
            console.error(error);
        }
    };
    const handleUpdate = async (e,id) => {
        e.stopPropagation();
        try { 
            navigate(`./restaurants/${id}/update`);
        } catch (error) {
            
        }
    }
    const handleRestaurantSelect = async (id)=>{
        try {
            navigate(`./restaurants/${id}`);
            
        } catch (error) {
            
        }
    }
    return (
        <div className="list-group mx-2">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(entry => (
                        <tr onClick={()=>handleRestaurantSelect(entry.id)} key={entry.id}>
                            <th scope="row">{entry.name}</th>
                            <td>{entry.location}</td>
                            <td>{"$".repeat(entry.price_range)}</td>
                            <td><Rating rating={entry.average_rating} /><span style={{color:"#FFD43B"}}> ({entry.count!==null?entry.count:0})</span></td>
                            <td><button onClick = {(e)=> handleUpdate(e,entry.id)} className="btn btn-warning">Update</button></td>
                            <td><button onClick={(e) => handleDelete(e,entry.id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RestaurantList;
