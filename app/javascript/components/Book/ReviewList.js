import React from 'react'
import ReviewStars from './ReviewStars'

const ReviewList = (props) => {
    const {score, title, description}  = props.attributes

    return (
        <div className="container">
            <div className="rating-container">
                <div className="RatingStars">
                    <ReviewStars score={score}/>
                </div>
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    )
}

export default ReviewList