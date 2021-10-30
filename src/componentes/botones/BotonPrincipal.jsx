import React from 'react'

const BotonPrincipal = ({children}) => {
    return (
        <div class="mx-2 my-2 px-6 flex flex-wrap">

       
        <button class="mx-0 my-0 bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 
        focus:ring-gray-700 py-1.5 px-1.5 border rounded-lg border-gray-700 flex items-center w-52">{children}</button>
            
    </div>

       
    )
}

export default BotonPrincipal;
