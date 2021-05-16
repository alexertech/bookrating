import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import BooksCard from './BooksCard'

// The BookGrid, listing all the books
const BooksGrid = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        axios.get('/api/v1/books.json')
        .then( resp => {
            setBooks( resp.data.data )
        } )
        .catch( resp => console.log(resp) )
    }, [books.length])

    const grid = books.map( item=> {
        return (
            <BooksCard 
            key={item.attributes.name}
            attributes={item.attributes} />
        )
    })

    return (
        <div className="container">
            <div className="columns is-multiline">
                {grid}
            </div>            
        </div>
    )
}

export default BooksGrid