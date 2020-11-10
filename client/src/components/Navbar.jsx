import React, { useState } from 'react'
// import logo from "../assets/img/educord-white.png"
import avatar from '../assets/img/profile.png'
const Navbar = () => {
    const [dropClicked, setDropClicked] = useState(false)
    return (
        <nav className="flex bg-white shadow-sm ">
           
            <div className="w-1/6 shadow-sm flex flex-row items-center py-2 border-r px-4">
                {
                    dropClicked?
                        <div className="relative inline-block text-left">
                            <div className="origin-top-right z-10 absolute right-auto mt-5 w-56 rounded-md shadow-lg">
                                <div className="rounded-md bg-white shadow-xs">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a href="#" className="block px-4 py-2 text-xs font-medium leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Create Category</a>
                                        <a href="#" className="block px-4 py-2 text-xs font-medium leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Create Room</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :null
                }
                    
                <img src={avatar} className="h-8 w-8 mr-2" alt=""/>
                <h1 className="font-bold py-2 text-xl text-gray-900">Juan Dela Cruz</h1>
                {
                    dropClicked? 
                        <svg width="1em" onClick={()=>setDropClicked(false)} height="1em" viewBox="0 0 16 16" class="ml-auto cursor-pointer bi bi-x text-gray-800 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>:
                         <svg onClick={()=>setDropClicked(true)} width="1em" height="1em" viewBox="0 0 16 16" class="cursor-pointer ml-auto bi bi-chevron-down text-gray-800 font-bold" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>      
                        </svg>
                }
               
               
            </div>
            
            <div className="w-4/6 flex items-center px-4">
                <h1 className="font-bold text-gray-800">#Algebra</h1>
            </div>
            
            <div className="w-1/6 ml-auto flex items-center justify-end px-4 ">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="cursor-pointer bi bi-camera-video-fill text-blue-500 mr-4 h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
                </svg>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="cursor-pointer bi bi-sliders text-blue-500 fill-current h-5 w-5"  xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>    
                </svg>
            </div>
        </nav>
    )
}

export default Navbar
