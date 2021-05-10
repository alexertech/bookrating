import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BookTile from './BookTile'

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

    return (
        <div className="container">
            <div className="tile">
                <div className="tile is-parent">
                    {
                        loaded &&
                        <BookTile
                        attributes={book.data.attributes}
                        reviews={book.included}
                        />
                    }
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        Reviews
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Book