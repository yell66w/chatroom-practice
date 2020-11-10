import React from 'react'
const ChatApp = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen h-screen">
            {children}
        </div>
    )
}

export default ChatApp
