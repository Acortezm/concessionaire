import React from "react";
import { Link } from "react-router-dom";
import BotonPrincipal from "../componentes/botones/BotonPrincipal";
import logo from "../media/logo.png"
import BotonSecundario from "../componentes/botones/BotonSecundario";

const Sidebar = () =>{
    return (
        <nav className = 'w-72 bg-gradient-to-tl from-yellow-300 to-orange-300'>
          <img src={logo} alt= "logo" className = "rounded-full h-40 w-40 flex items-center justify-center" />
          <Link to = "/vendedor/ventas"><BotonPrincipal>Ventas</BotonPrincipal></Link>
          <Link to = '/vendedor/addVenta'><BotonPrincipal>Agregar Venta</BotonPrincipal></Link>
        
          
          <div className = "absolute bottom-0">
          <Link to = '/'>
          <BotonSecundario>  Cerrar   Sesión    </BotonSecundario></Link>
          </div>
        </nav>
    )
}

export default  Sidebar;