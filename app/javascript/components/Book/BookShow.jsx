import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import BookTile from './BookTile'
import ReviewForm from './ReviewForm'

const Book = (props) => {
    const [book, setBook] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        const slug = props.match.params.slug
        const url = `/api/v1/books/${slug}`
        //api/v1/moby-dick
        //books/moby-dick
        axios.get(url)
        .then( resp => {
            setBook(resp.data)
            setLoaded(true)
        })
        .catch( resp => console.log(resp))
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        setReview(
            Object.assign({}, review, {[e.target.name]: e.target.value})
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
        const book_id = book.data.id
        axios.post('/api/v1/reviews', {review, book_id})
        .then(resp=> {
            const included = [...book.included, resp.data.data]
            setBook({...book, included})
            setReview({title:'', description:'', score:0})
        })
        .catch(resp => {})
    }
    const setRating = (score, e) => {
        e.preventDefault()
        setReview({...review, score})
    }

    return (
        <div className="container">
            {
            loaded &&
            <Fragment>
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-parent">
                    <BookTile
                    attributes={book.data.attributes}
                    reviews={book.included}
                    />
                </div>
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <ReviewForm 
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        setRating={setRating}
                        atributes={book.data.atributes}
                        review={review}
                        />
                    </div>
                </div>
            </div>    
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <p className="subtitle">Reviews</p>
                    </div>
                </div>
            </div>
            </Fragment>
            }
        </div>
    )
}

export default Book