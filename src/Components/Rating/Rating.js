import React from "react";
import ReactStars from 'react-rating-stars-component'

const ratingChanged = (newRating) => {
    console.log(newRating)
}

class Rating extends React.Component{
    render(){
        return(
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor={"#ffd700"}>
            </ReactStars>
        )
    }
}

export default Rating