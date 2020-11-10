import React from 'react'
import Navbar from './components/Navbar'
import MainContainer from './containers/MainContainer'

const App = () => {
  return (
    <div className="h-screen">
      <Navbar/>
      <MainContainer />
    </div>
  )
}

export default App
