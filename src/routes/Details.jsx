import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DineDiscover from '../apis/DineDiscover';
import { RestaurantContext } from '../context/RestaurantContext';
import Rating from '../components/Rating';
import Review from '../components/Review';
import AddReview from '../components/AddReview';

const Details = (props) => {
    const {id} = useParams();
    const { selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DineDiscover.get(`/${id}`);
                // console.log(response);
                setSelectedRestaurant(response.data.data);
                //Purpose of this is to retreive the data from the restaurant and store it inside this state variable. 
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-center font-weight-light display-1">{selectedRestaurant && selectedRestaurant.restaurant.name}</h1>
            <span className="d-flex justify-content-center my-3"><Rating rating={selectedRestaurant && selectedRestaurant.restaurant.average_rating} /><small className="mx-1" style={{color:"#FFD43B", fontSize:"17px"}}>({selectedRestaurant && (selectedRestaurant.restaurant.count!=null?selectedRestaurant.restaurant.count:0)} Reviews)</small></span>

            <Review reviews={selectedRestaurant && selectedRestaurant.reviews} />
            <AddReview />

        </div>
    );
}

export default Details;
