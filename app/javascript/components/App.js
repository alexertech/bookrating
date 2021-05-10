import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Books from './Books/BooksGrid'
import Book from './Book/BookShow'

const App = () => {
    return (
        <div className="container is-max-desktop">
        <br/>
        <section className="hero is-info box">
            <div className="hero-body">
                <p className="title">
                  <a className="has-text-white" href="/">Book Rating</a>
                </p>
                <p className="subtitle">
                    Honest books reviews
                </p>
            </div>
        </section>
        <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/books/:slug" component={Book} />
        </Switch>
        </div>
    )
}
export default App