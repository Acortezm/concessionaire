import React from 'react'

const BotonPrincipal = ({children}) => {
    return (
        <div class="mx-2 my-2 px-6 flex flex-wrap">
       
        <button class="mx-2 my-2 bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 
        focus:ring-gray-700 py-2 px-2 border rounded-lg border-gray-700 flex items-center w-full">{children}</button>
            
    </div>

       
    )
}

export default BotonPrincipal;
