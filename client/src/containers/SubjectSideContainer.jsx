import React from 'react'
import SubjectLabel from '../components/SubjectLabel'
import { Scrollbars } from 'react-custom-scrollbars';

const SubjectSideContainer = () => {
    return (
       
        <>
            <div className="flex-none bg-white text-gray-800 w-1/6 shadow-lg overflow-y-auto">
            <Scrollbars style={{ width: "100%"}} >
                <div className="px-2 pb-6">
                    <div className="flex border-b items-center justify-between bg-gray-200 rounded-xl px-4 py-3  mx-2">
                        <input className="focus:outline-none w-full h-full bg-transparent mr-1 text-xs font-semibold text-gray-800" placeholder="Search Subject..."></input>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search text-gray-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                    </div>
                    <div className="flex flex-col px-2 mt-2">
                        <SubjectLabel/>
                        <SubjectLabel/>
                        <SubjectLabel/>
                        <SubjectLabel/>
                        <SubjectLabel/>
                    </div>

                </div>
            
            </Scrollbars>
            </div>
        </>
       
    )
}

export default SubjectSideContainer
