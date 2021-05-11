import React, { Fragment } from "react"

const ratingOptions = [5,4,3,2,1].map( (score,index) => {
    return (
        <Fragment>
        <input type="radio" value={score} name="rating"
               onChange={() => console.log('selected:', score)}
               id={`rating-${score}`} />
        <label>{score}</label>
        </Fragment>
    )
})

const ReviewForm = (props) => {
    return (
        <div className="container">
            <p className="subtitle">
                Share your thoughts about :
            </p>
            <form onSubmit={props.handleSubmit}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" type="text" name="title" 
                               placeholder="Review title"
                               values={props.review.title}
                               onChange={props.handleChange} />
                    </div>                    
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea className="textarea" name="description"
                                  placeholder="Review description" 
                                  values={props.review.description}
                                  onChange={props.handleChange} ></textarea>
                    </div>
                </div>  
                <div className="field">
                    <label className="label">Rating</label>
                    <div className="control">
                        {ratingOptions}
                    </div>
                </div>
                <button type="submit">Submit your review</button>
            </form>
        </div>
    )
}

export default ReviewForm