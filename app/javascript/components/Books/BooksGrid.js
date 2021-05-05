import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const BooksGrid = (props) => {
    return(
        <div className="card">
            <div className="book-image">
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </div>
            <div className="book-name">{props.attributes.name}</div>
            <div className="book-score">{props.attributes.avg_score}</div>
            <div className="book-link">
                <Link to={`/book/${props.attributes.slug}`}>Details</Link>
            </div>
        </div>
    )
}

export default BooksGrid