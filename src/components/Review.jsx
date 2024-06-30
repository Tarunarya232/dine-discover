import React from 'react'
import Rating from './Rating'

const Review = ({reviews}) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews && reviews.map((review) =>{
        return (        
        <div key = {review.id} className="card text-bg-primary mb-3 mx-2" style={{maxWidth:'30%'}}>
          <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span><Rating rating={review.rating}/></span>
          </div>
          <div className="card-body">
              <p className="card-text">{review.review}</p>
          </div>
      </div>);
      })}
    </div>
   )
}

export default Review
