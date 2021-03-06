import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import ReviewStars from '../Book/ReviewStars'

const BooksCard = (props) => {
    return(
        <div className="column is-one-third">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {props.attributes.name}
                    </p>
                </header>
                <div className="card-image">
                    <figure className="image is-4by5">
                        <img src={props.attributes.image_url} 
                             alt={props.attributes.name}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <ReviewStars score={props.attributes.avg_score}/>
                    </div>
                </div>
                <footer className="card-footer">
                    <div className="content">
                        <Link className="card-footer-item" 
                              to={`/books/${props.attributes.slug}`}>Details</Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default BooksCard