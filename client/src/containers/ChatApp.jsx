import React from 'react'
import Navbar from '../components/Navbar'
import MainContainer from './MainContainer'
const ChatApp = () => {
    return (
        <div className="flex flex-col min-h-screen h-screen">
            <Navbar /> 
            <MainContainer />
        </div>
    )
}

export default ChatApp
