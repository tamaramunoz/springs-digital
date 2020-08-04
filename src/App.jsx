import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Home from './components/Home'
import MainPage from './components/MainPage'


const App = () => {

  return (
    <Router>
      <div className="m-3">
        <Navbar />

        <Switch>
          <Route  path="/" exact component={Home} />
          <Route  path="/indicators" component={MainPage} />
        </Switch>

      </div>
    </Router>
  )
}

export default App