import React from "react";
import SidebarAdmin from '../componentes/SidebarAdmin';
import Footer from '../componentes/Footer';
import Sidebar from '../componentes/SidebarVendedor';


const PublicLayout = ({children}) =>{
    return (
        <div className = "flex flex-col justify-between h-screen">
            <SidebarAdmin/>
            <div className = "h-full overflow-y-scroll">
            <main className = "h-full overflow-y-scroll">{children}</main>
            
            <Footer/>  
            </div>       
        </div>
    )
}

export default  PublicLayout;