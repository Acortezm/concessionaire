import React from "react";
import SidebarAdmin from '../componentes/SidebarAdmin';
import Footer from '../componentes/Footer';


const AdminLayout = ({children}) =>{
    return (
        <div className = 'flex w-screen h-screen'>
            <SidebarAdmin></SidebarAdmin>
            <main className = 'flex w-full'>
            
                {children}
                </main>
            
        </div>
    )
}

export default  AdminLayout;