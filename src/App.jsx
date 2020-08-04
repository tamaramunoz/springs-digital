import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'

const App = () => {

  return (
    <div className="m-3">
      <Navbar />
    </div>
  )
}

export default App