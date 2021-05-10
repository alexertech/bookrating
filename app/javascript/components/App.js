import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Books from './Books/BooksGrid'
import Book from './Book/BookShow'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/books/:slug" component={Book} />
        </Switch>
    )
}
export default App