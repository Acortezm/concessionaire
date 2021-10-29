import React from "react";
import SidebarVendedor from '../componentes/SidebarVendedor';

const SellerLayout = ({children}) =>{
    return (
        <div className = 'flex w-screen h-screen'>
            <SidebarVendedor></SidebarVendedor>
            <main className = 'flex w-full'>
                {children}
                </main>
        </div>
    )
}

export default  SellerLayout;