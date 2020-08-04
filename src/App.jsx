import React from 'react'
import Navbar from './components/Navbar'

import {Provider} from 'react-redux'
import generateStore from './redux/store'

const App = () => {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  )
}

export default App