import React from "react";
import Sidebar from "../componentes/Sidebar";

const PrivateLayout = (children) =>{
    return (
        <div>
            <Sidebar> {children} </Sidebar>
        </div>
    )
}

export default  PrivateLayout;