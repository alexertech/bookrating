import React from 'react'
import ReviewStars from './ReviewStars'

const BookTile = (props) => {
    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length

    return(
        <div className="tile is-vertical">
            <div className="tile box">
                <span className="title">{name}</span>
            </div>
            <div className="tile box">
                <div>{total} user reviews </div>
                <div> 
                    <ReviewStars score={avg_score}/>
                </div>
                
            </div>
            <div className="tile box has-text-centered">
                <figure className="image">
                    <img  src={image_url} alt={name}/>
                </figure>
            </div>
        </div>
    )
}

export default BookTile