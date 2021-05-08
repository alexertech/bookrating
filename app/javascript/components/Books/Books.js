import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import BooksGrid from './BooksGrid'

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        // Get all the books
        // update state
        axios.get('/api/v1/books.json')
        .then( resp => {
            setBooks( resp.data.data )
        } )
        .catch( resp => console.log(resp) )
    }, [books.length])

    const grid = books.map( item=> {
        return (
            <BooksGrid 
            key={item.attributes.name}
            attributes={item.attributes} />
        )
    })

    return (
        <div className="container is-max-desktop">
            <div className="container">
                <h1 className="title">
                    Books Rating
                </h1>
                <p className="subtitle">
                    Honest books reviews
                </p>
            </div>
            <div className="container">
                <div className="columns mt-6 is-centered">
                    {grid}
                </div>            
            </div>
        </div>
    )

}

export default Books