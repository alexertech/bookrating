import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const BooksGrid = (props) => {
    return(
        <div className="column is-one-quarter">
        <div className="card">
            <div className="card-header-title">
                {props.attributes.name}
            </div>
            <div className="card-image">
                <figure class="image is-4by3">
                    <img src={props.attributes.image_url} alt={props.attributes.name}/>
                </figure>
            </div>
            <div className="card-content">
                <Link to={`/book/${props.attributes.slug}`}>Details</Link>
            </div>
            <div className="card-footer">
                {props.attributes.avg_score}                    
            </div>
        </div>
        </div>
    )
}

export default BooksGrid