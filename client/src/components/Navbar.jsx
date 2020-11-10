import React from 'react'
import logo from "../assets/img/educord-white.png"
const Navbar = () => {
    return (
        <nav className="flex bg-gradient-to-r from-teal-400 to-blue-500 py-2 px-6 ">
            <div className="">
                <img src={logo} className="h-12" alt=""/>
            </div>
            <div className="ml-auto flex items-center">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sliders text-white fill-current"  xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>    
            </svg>
            </div>
        </nav>
    )
}

export default Navbar
