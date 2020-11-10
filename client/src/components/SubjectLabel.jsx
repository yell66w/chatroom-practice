import React, { useState } from 'react'

const SubjectLabel = () => {
    const [showSub, setShowSub] = useState(true)

    const onSubjectLabelClick =()=> {
        setShowSub(!showSub)
    }
    return (
        <div className="flex flex-col w-full rounded-xl text-gray-800">
            <div className="cursor-pointer w-full  justify-between flex flex-row  py-2 px-1">  
                <div className="flex flex-row items-center" onClick={onSubjectLabelClick}>
                    {
                        showSub?
                        <svg width="1em" height="0.6em" viewBox="0 0 16 16" className="transition duration-500 bi bi-chevron-down text-gray-800 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>      
                        </svg>
                        :
                        <svg width="1em" height="0.6em" viewBox="0 0 16 16" className="transition duration-50 bi bi-chevron-right text-gray-800 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    }
                   
                    <h1 className="ml-1 text-xs font-bold transition duration-300 focus:text-blue-500 hover:text-blue-500">MATH</h1>
                </div>
                <div className="flex ">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="hover:text-blue-500 focus:text-blue-500 bi bi-plus-circle ml-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </div>
              
            </div>
           <ul className={showSub?'show text-xs ml-6  font-semibold rounded-xl':'hidden'}>
               <li className="flex items-center transition duration-200 bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:text-white cursor-pointer py-2 px-4 my-1  rounded-xl">
                  # Elementary</li>
               <li className="flex items-center transition duration-200 bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:text-white cursor-pointer py-2 px-4 my-1  rounded-xl"> # Algebra</li>
               <li className="flex items-center transition duration-200 bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:text-white cursor-pointer py-2 px-4 my-1  rounded-xl"> # Calculus</li>
           </ul>
        </div>
    )
}

export default SubjectLabel
