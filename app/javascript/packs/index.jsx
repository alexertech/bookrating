// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/App'
import {BrowserRouter as Router, Route } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div className="container is-max-desktop">
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
      <Router>
        <Route path="/" component={App} />
      </Router>
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
