import React, { useState } from "react";
// import logo from "../assets/img/educord-white.png"
import avatar from "../assets/img/profile.png";
const Navbar = ({ setIsAuthenticated }) => {
  const [dropClicked, setDropClicked] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };
  return (
    <nav className="flex bg-gradient-to-tr from-teal-400 to-blue-500 text-white ">
      <div className="w-1/6 flex flex-row items-center py-2 px-4">
        {dropClicked ? (
          <div className="relative inline-block text-left">
            <div className="animate__animated animate__zoomIn  origin-top-right z-10 absolute shadow-xs right-auto mt-5 w-56 rounded-md ">
              <div className="rounded-md bg-white ">
                <div
                  className="py-1 flex flex-col"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="/"
                    className="block px-4 py-2 text-xs font-medium leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                  >
                    Create Category
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-xs font-medium leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                  >
                    Create Room
                  </a>
                  <button
                    onClick={logout}
                    className="w-full bg-white block text-left px-4 py-2 text-xs font-medium leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <img src={avatar} className="h-8 w-8 mr-2" alt="" />
        <h1 className="font-bold py-2 text-xl ">Juan Dela Cruz</h1>
        {dropClicked ? (
          <svg
            width="1em"
            onClick={() => setDropClicked(false)}
            height="1em"
            viewBox="0 0 16 16"
            className="ml-auto cursor-pointer bi bi-x text-white font-bold"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setDropClicked(true)}
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="cursor-pointer ml-auto bi bi-chevron-down text-white font-bold"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        )}
      </div>

      <div className="w-4/6 flex items-center px-4">
        {/* <h1 className="font-bold ">#Algebra</h1> */}
      </div>

      <div className="w-1/6 ml-auto flex items-center justify-end px-4 ">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="cursor-pointer bi bi-camera-video-fill text-white mr-4 h-6 w-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
          />
        </svg>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="cursor-pointer bi bi-sliders text-white fill-current h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
