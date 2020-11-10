import React from 'react'
import SubjectLabel from '../components/SubjectLabel'
import { Scrollbars } from 'react-custom-scrollbars';

const SubjectSideContainer = () => {
    return (
       
        <>
            <div className="flex-none w-1/5 py-6 shadow-lg overflow-y-auto">
            <Scrollbars style={{ width: "100%"}} >
                <div className="px-2">
                    <div className="flex items-center justify-between bg-gray-200 px-4 py-3 rounded-xl mx-2">
                        <h1 className="text-xs font-semibold text-gray-800">Search Subject...</h1>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search text-gray-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
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
