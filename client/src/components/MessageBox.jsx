import React from 'react'

const MessageBox = () => {
    return (
        <div className="flex mt-auto">

            <div className="flex items-center bg-gray-100 shadow-lg p-4 w-full">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="w-6 h-6 text-gray-800 bi bi-plus-circle-fill mr-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                <div className="w-full">
                    <input type="text" className="focus:outline-none border rounded-xl bg-white px-4 py-2 w-full"/>
                </div>
                <button className="focus:outline-none flex items-center justify-center ml-5 bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-xl text-sm">Send 
                <span className="ml-1">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="h-3 w-3 bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </span></button>

            </div>
                
           
        </div>
    )
}

export default MessageBox
