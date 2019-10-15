import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalNav from './shared/components/GlobalNav/GlobalNav'
import Testimonials from './views/Testimonials'

import './App.scss'

function App() {
  return (
    <div className="body-app">
      <BrowserRouter>
        <GlobalNav />
        <Switch>
          <Route exact path="/" component={Testimonials} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
