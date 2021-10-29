import React from "react";
import SidebarAdmin from '../componentes/SidebarAdmin';

const AuthLayout = ({children}) =>{
    return (
        <main className= 'flex flex-col items-center justify-center bg-purple-100 p-7'>
            <div className = 'w-full'>{children}</div>
        </main>

    )
}

export default  AuthLayout;