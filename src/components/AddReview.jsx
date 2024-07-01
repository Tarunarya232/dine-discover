import React, { useState } from 'react';
import DineDiscover from '../apis/DineDiscover';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const AddReview = (props) => {
  let navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DineDiscover.post(`/${id}/addReview`, {
        name: name,
        review: review,
        rating: rating,
      });
      navigate(location.pathname); // Navigate to the same page
    } catch (error) {
      console.error("Failed to submit review", error);
    }
  };

  return (
    <div className="mb-2">
      <form onSubmit={handleSubmit}>
        <div className="col-12 mt-3 form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="name"
            placeholder="Enter your Name"
          />
        </div>
        <div className="col-12 mt-3 form-group">
          <label htmlFor="rating">Rating</label>
          <select
            className="form-control"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="col-12 mt-3 form-group">
          <label htmlFor="review">Review</label>
          <textarea
            className="form-control"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Enter your Detailed Review"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add</button>
      </form>
    </div>
  );
};

export default AddReview;
