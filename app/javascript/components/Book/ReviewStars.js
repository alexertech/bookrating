import React from 'react'

const ReviewStars = (props) => {
    const score = (props.score / 5) * 100

    return (
        <span className="starWrapper">
            <span className="stars" style={{width:score+"%"}}></span>
        </span>
    )
}

export default ReviewStars