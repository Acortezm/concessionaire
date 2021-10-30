import React from "react";
import SidebarVendedor from '../componentes/SidebarVendedor';

const SellerLayout = ({children}) =>{
    return (
        <div className = 'flex w-screen h-screen'>
            <SidebarVendedor className = "xl:w-1/2 w-11/12 "></SidebarVendedor>
            <main className = 'absolute inset-y-0 right-0'>
                {children}
                </main>
        </div>
    )
}

export default  SellerLayout;