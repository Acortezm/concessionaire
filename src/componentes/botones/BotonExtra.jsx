import React from 'react'

const BotonExtra = ({children}) => {
    return (
        <div class="mx-2 my-2 px-6 flex flex-wrap">
       
        <button class="bg-CBlue focus:outline-none focus:ring-2 focus:ring-offset-1 
        focus:ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-52 font text-white justify-center">{children}</button>
            
    </div>
    )
}

export default BotonExtra;
