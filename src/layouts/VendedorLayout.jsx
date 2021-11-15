import React from "react";
import SidebarVendedor from '../componentes/SidebarVendedor';


const VendedorLayout = ({children}) =>{
    return (
        <div className = 'flex w-screen h-full '>
            <SidebarVendedor className = "xl:w-1/2 w-11/12 "></SidebarVendedor>
            <main>
            
                {children}
                </main>
            
            
        </div>
    )
}

export default VendedorLayout;