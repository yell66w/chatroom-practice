import React from 'react'

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-600">
            <div className="flex flex-col bg-white h-full py-6 px-12 rounded-lg w-3/12">
                <div className="px-4 text-center">
                    <h1 className="font-bold text-gray-700">SIGN IN TO YOUR ACCOUNT</h1>
                </div>
                <div className="mt-5 flex flex-col">
                    <input type="text" className="my-1 rounded-lg p-4 text-xs focus:outline-none text-gray-700 bg-gray-200 w-full h-12" placeholder="username@email.com"/>
                    <input type="text" className="my-1 rounded-lg p-4 text-xs focus:outline-none text-gray-700 bg-gray-200 w-full h-12" placeholder="*********"/>
                   
                    <button type="text" className="mt-4 mb-2 p-4 rounded-lg text-xs focus:outline-none text-white font-bold bg-gradient-to-r from-blue-400 to-blue-500  w-full h-12" >
                        SIGN IN    
                    </button>
                    <a href="" className="text-xs self-center">Dont have an account?</a>
                </div>
            </div>
        </div>
    )
}

export default Login
