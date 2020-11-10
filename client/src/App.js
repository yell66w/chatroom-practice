import React from 'react'
import Navbar from './components/Navbar'
import MainContainer from './containers/MainContainer'
import { Scrollbars } from 'react-custom-scrollbars';
const App = () => {
  return (
    <Scrollbars style={{ width: 500, height: 300 }}>
         <div className="h-screen">
          <Navbar/>
          <MainContainer />
    </div>
    </Scrollbars>
   
  )
}

export default App
