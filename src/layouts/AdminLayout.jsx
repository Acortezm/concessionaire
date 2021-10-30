import React from "react";
import SidebarAdmin from '../componentes/SidebarAdmin';


const AdminLayout = ({children}) =>{
    return (
        <div className = 'flex w-screen h-full'>
            <SidebarAdmin></SidebarAdmin>
            <main className = 'flex w-full'>
            
                {children}
                </main>
            
        </div>
    )
}

export default  AdminLayout;