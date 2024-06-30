import React from 'react'

const Rating = ({rating}) => {
    const stars = [];
    for(let i = 1; i<=5; i++){
        if(i<=rating){
            stars.push(<i key={i} className="fa-solid fa-star" style={{color:"#FFD43B"}}></i>);
        }
        else if(i === Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<i key={i} className="fa-solid fa-star-half-stroke" style={{color:"#FFD43B"}}></i>);
        }
        else{
            stars.push(<i key={i} className="fa-regular fa-star" style={{color:"#FFD43B"}}></i>);
        }
    }
  return (
    <>{stars}</>
  )
}

export default Rating
