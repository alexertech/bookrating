import React from 'react'

const BooksGrid = (props) => {
    return(
        <div className="card">
            <div className="book-image">
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </div>
            <div className="book-name">{props.attributes.name}</div>
            <div className="book-score">{props.attributes.avg_score}</div>
            <div className="book-link">
                <a href={`/book/${props.attributes.slug}`}>Details</a>
            </div>
        </div>
    )
}

export default BooksGrid