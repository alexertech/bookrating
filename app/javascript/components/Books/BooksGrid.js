import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const BooksGrid = (props) => {
    return(
        <div className="column is-one-quarter">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {props.attributes.name}
                    </p>
                </header>
                <div className="card-image">
                    <figure className="image is-4by5">
                        <img src={props.attributes.image_url} alt={props.attributes.name}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        {props.attributes.avg_score}                    
                    </div>
                </div>
                <footer className="card-footer">
                    <div className="content">
                        <Link className="card-footer-item" to={`/book/${props.attributes.slug}`}>Details</Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default BooksGrid