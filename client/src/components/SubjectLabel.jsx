import React from 'react'

const SubjectLabel = () => {
    return (
        <div className="flex flex-col w-full rounded-xl text-gray-800">
            <div className="cursor-pointer w-full  flex flex-row  items-center py-2 px-1">  
                <svg width="1em" height="0.6em" viewBox="0 0 16 16" class="bi bi-chevron-down text-gray-900 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>      
                </svg>
                <h1 className="ml-1 text-xs font-bold">MATH</h1>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle ml-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
           <ul className="pl-8 pr-4 text-sm font-semibold">
               <li className="flex items-center transition duration-200 bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white cursor-pointer py-1 px-4 my-1  rounded-xl">
                   <span className="text-xl mr-2">#</span>Elementary</li>
               <li className="flex items-center transition duration-200 bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white cursor-pointer py-1 px-4 my-1  rounded-xl"><span className="text-xl mr-2">#</span> Algebra</li>
               <li className="flex items-center transition duration-200 bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white cursor-pointer py-1 px-4 my-1  rounded-xl"><span className="text-xl mr-2">#</span> Calculus</li>
           </ul>
        </div>
    )
}

export default SubjectLabel
