import React from 'react'
import avatar from '../assets/img/profile.png'
const ChatPill = ({owner,message}) => {
  
        return (
            <>
            {
                owner?
                <div className="flex flex-col my-2 px-4 items-end w-3/5 ml-auto">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-500  ml-2 px-4 py-2 rounded-xl w-auto">
                        <p className="text-sm text-left text-white">
                            {message}
                        </p> 
                    </div>
                </div>
                
                :
                <div className="flex flex-col my-2 px-4">
                    <div className="flex w-full px-16 py-2">
                        <h1 className="text-xs text-gray-600">
                            Ryan Tillaman
                        </h1>
                    </div>
                    <div className="flex w-3/5">
                        <img src={avatar} className="w-10 h-10 rounded-full self-start" alt=""/>
                        <div className="bg-gray-200 ml-2 text-sm text-center px-4 py-2 rounded-xl w-auto">
                            <p className="text-sm text-left">
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            }
            </>
            
        )

    
}

export default ChatPill
