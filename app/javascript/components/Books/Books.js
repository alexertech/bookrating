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
            attributes={item.attributes}
            
        />)
    })

    return (
        <div className="home">
            <div className="header">
                <h1>Books Rating</h1>
                <div className="subHeader">
                    Honest books reviews
                </div>
            </div>
            <div className="grid">
                <ul>{grid}</ul>
            </div>            
        </div>
    )

}

export default Books