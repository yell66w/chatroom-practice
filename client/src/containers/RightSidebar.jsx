import React from 'react'
import avatar from '../assets/img/profile.png'
import chihuahua from '../assets/img/chihuahua.jpg'
import Scrollbars from 'react-custom-scrollbars'
const RightSidebar = () => {
    return (
       
        <div className="flex flex-wrap flex-col w-1/6  shadow-lg text-gray-800  overflow-y-auto ">
             <Scrollbars style={{ width: "100%"}} autoHeightMax>
            <div className="flex flex-col px-4 pt-6">
                <div>
                    <h1 className="font-bold text-xs">ONLINE</h1>
                </div>
                <ul className="font-semibold px-1 mt-2 text-sm">
                    <li className="py-2 flex flex-row px-1">
                        <span>
                            <img src={avatar} className="w-8 h-8 rounded-full mr-3" alt=""/>
                        </span>
                        Alvin Chihuahua
                    </li>
                    <li className="py-2 flex flex-row px-1">
                        <span>
                            <img src={avatar} className="w-8 h-8 rounded-full mr-3" alt=""/>
                        </span>
                        Ziv Chihuahua
                    </li>
                    <li className="py-2 flex flex-row px-1">
                        <span>
                            <img src={avatar} className="w-8 h-8 rounded-full mr-3" alt=""/>
                        </span>
                        Kiel Chihuahua
                    </li>
                    <li className="py-2 flex flex-row px-1">
                        <span>
                            <img src={avatar} className="w-8 h-8 rounded-full mr-3" alt=""/>
                        </span>
                        Ryan Chihuahua
                    </li>
                  
                </ul>
            </div>
            <div className="flex flex-col mt-6 px-4 pb-6">
                <div>
                    <h1 className="font-bold text-xs">SHARED PHOTOS</h1>
                </div>
                <div className="mt-3 flex flex-row flex-wrap">
                    <img src={chihuahua} className="w-16 h-16 object-cover mx-1  my-1 rounded-xl" alt=""/>
                    <img src={chihuahua} className="w-16 h-16 object-cover mx-1  my-1 rounded-xl" alt=""/>
                    <img src={chihuahua} className="w-16 h-16 object-cover mx-1  my-1 rounded-xl" alt=""/>
                    <img src={chihuahua} className="w-16 h-16 object-cover mx-1  my-1 rounded-xl" alt=""/>
                    <img src={chihuahua} className="w-16 h-16 object-cover mx-1  my-1 rounded-xl" alt=""/>
                    <img src={chihuahua} className="w-16 h-16 object-cover mx-1  my-1 rounded-xl" alt=""/>

                </div>
                <div className="mt-6">
                    <div>
                        <h1 className="font-bold text-xs">SENT FILES</h1>
                    </div>
                    <ul className="text-sm">
                        <li className="flex items-center px-2 mt-3">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-word" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
                                <path fill-rule="evenodd" d="M4.879 6.515a.5.5 0 0 1 .606.364l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 0 1 .364-.606z"/>
                            </svg>
                            <p className="ml-2">Chihuahua.docx</p>
                        </li>
                        <li className="flex items-center px-2 my-1">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-word" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
                                <path fill-rule="evenodd" d="M4.879 6.515a.5.5 0 0 1 .606.364l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 0 1 .364-.606z"/>
                            </svg>
                            <p className="ml-2">Chihuahua.docx</p>
                        </li>
                        <li className="flex items-center px-2 my-1">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-word" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
                                <path fill-rule="evenodd" d="M4.879 6.515a.5.5 0 0 1 .606.364l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 0 1 .364-.606z"/>
                            </svg>
                            <p className="ml-2">Chihuahua.docx</p>
                        </li>
                        <li className="flex items-center px-2 my-1">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-word" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
                                <path fill-rule="evenodd" d="M4.879 6.515a.5.5 0 0 1 .606.364l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 0 1 .364-.606z"/>
                            </svg>
                            <p className="ml-2">Chihuahua.docx</p>
                        </li>
                        <li className="flex items-center px-2 my-1">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-word" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
                                <path fill-rule="evenodd" d="M4.879 6.515a.5.5 0 0 1 .606.364l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 0 1 .364-.606z"/>
                            </svg>
                            <p className="ml-2">Chihuahua.docx</p>
                        </li>
                    </ul>
                   
                    

                </div>
            </div>
        </Scrollbars>

        </div>
    )
}

export default RightSidebar
