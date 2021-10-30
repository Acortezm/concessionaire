import React from "react";
import SidebarAdmin from '../componentes/SidebarAdmin';


const AdminLayout = ({children}) =>{
    return (
        <div className = 'flex w-screen h-full'>
            <SidebarAdmin className = "xl:w-1/2 w-11/12 "></SidebarAdmin>
            <main className = 'absolute inset-y-0 right-0'>
            
                {children}
                </main>
            
        </div>
    )
}

export default  AdminLayout;