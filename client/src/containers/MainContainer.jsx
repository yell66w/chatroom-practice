import React from 'react'
import ChatContainer from './ChatContainer'
import RightSidebar from './RightSidebar'
import SubjectSideContainer from './SubjectSideContainer'

const MainContainer = () => {
    return (
        <div className="flex flex-1 overflow-y-hidden">
            <SubjectSideContainer />
            <ChatContainer />
            <RightSidebar />
        </div>
    )
}

export default MainContainer
