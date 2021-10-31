import React from "react";
import SidebarVendedor from '../componentes/SidebarVendedor';

const SellerLayout = ({children}) =>{
    return (
        <div className = 'flex w-screen h-screen' >
            <SidebarVendedor className = "xl:w-1/2 w-11/12 "></SidebarVendedor>
            <main>
                {children}
                </main>
        </div>
    )
}

export default  SellerLayout;