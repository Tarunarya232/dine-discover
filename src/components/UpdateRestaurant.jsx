import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantContext';
import DineDiscover from '../apis/DineDiscover';


const UpdateRestaurant = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async ()=>{
            try {
                const response = await DineDiscover.get(`/${id}`);
                console.log(response);
                setName(response.data.data.restaurant.name);
                setLocation(response.data.data.restaurant.location);
                setPriceRange(response.data.data.restaurant.price_range);
                
            } catch (error) {
                console.log(error.message);
                
            }
            
        }
        fetchData();

    },[]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const updatedRestaurant = await DineDiscover.put(`/${id}`,{
                name:name,
                location:location,
                price_range:priceRange,
            });
            navigate("/");
            
        } catch (error) {
            
        }
    }

    console.log(id); 
    return (
    <div className="bd-example">
        <form>
            <div className="col-12 mt-3 form-group">
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="name" placeholder="Name of the Restaurant" />
            </div>
            <div className="col-12 mt-3 form-group">
                <label htmlFor="location">Location</label>
                <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)}className="form-control" id="location" placeholder="Location of the Restaurant" />
            </div>
            <div className="col-12 mt-3 form-group">
                <label htmlFor="priceRange">Price Range</label>
                <select value={priceRange} onChange={(e)=>setPriceRange(e.target.value)} className="form-control" id="priceRange">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-3">Update</button>
        </form>
        </div>);
}

export default UpdateRestaurant
