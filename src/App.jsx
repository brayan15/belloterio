import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import GlobalNav from './shared/components/GlobalNav/GlobalNav'
import Testimonials from './views/Testimonials'

import './App.scss'

function App() {
  return (
    <div className="body-app">
      <BrowserRouter>
        <GlobalNav />
        <Switch>
          <Redirect exact from="/" to="/page-1" />
          <Route exact path="/page-1" component={Testimonials} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
