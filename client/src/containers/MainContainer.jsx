import React from 'react'
import ChatContainer from './ChatContainer'
import RightSidebar from './RightSidebar'
import SubjectSideContainer from './SubjectSideContainer'

const MainContainer = () => {
    return (
        <div className="flex h-screen">
            <SubjectSideContainer />
            <ChatContainer />
            <RightSidebar />
        </div>
    )
}

export default MainContainer
