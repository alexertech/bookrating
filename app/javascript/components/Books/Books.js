import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

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

    const list = books.map( item=> {
        return (<li key={item.attributes.name}>{item.attributes.name}</li>)
    })

    return (
        <Fragment>
            <div>List of the Books#index</div>
            <ul>{list}</ul>
        </Fragment>
    )

}

export default Books