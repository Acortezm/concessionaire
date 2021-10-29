import React from "react";
import SidebarAdmin from '../componentes/SidebarAdmin';

const AuthLayout = ({children}) =>{
    return (
        <main> <div>{children}</div>
        </main>

    )
}

export default  AuthLayout;