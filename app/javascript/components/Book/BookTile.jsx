import React from 'react'
import ReviewStars from './ReviewStars'

const BookTile = (props) => {
    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length

    return(
        <div className="tile is-vertical">
            <div className="tile box is-parent pt-5">
                <p className="title">{name}</p>
            </div>
            <div className="tile is-parent">
                <div className="tile is-child box p-0">
                    <figure className="image">
                        <img  src={image_url} alt={name}/>
                    </figure>
                </div>
                <div className="tile is-child box">
                    
                    <div>
                        {total} user reviews
                    </div>
                    <div> 
                        <ReviewStars score={avg_score}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BookTile