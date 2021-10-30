import React from "react";
import { Link } from "react-router-dom";
import BotonPrincipal from "../componentes/botones/BotonPrincipal";
import logo from "../media/logo.png"
import BotonSecundario from "../componentes/botones/BotonSecundario";

const Sidebar = () =>{
    return (
        <nav className = 'xl:w-2/6 w-2/6 h-full bg-gradient-to-tl from-yellow-300 to-orange-300 flex items-center flex-col fixed'>
          <div className= 'flex-col items-center justify-center mb-0 mt-3'><img src={logo} alt= "logo" className = "rounded-lg h-36 w-36 flex items-center justify-center" />
          <h2 className= "text-sm text-center text-gray-600 mt-5 font-bold " >PERFIL DE VENDEDOR</h2>
          </div>
          <div><Link to = '/vendedor'><BotonPrincipal>Inicio</BotonPrincipal></Link>
          <Link to = '/vendedor/venta'><BotonPrincipal>Ventas</BotonPrincipal></Link>
          <Link to = '/vendedor/addVenta'><BotonPrincipal>Agregar Venta</BotonPrincipal></Link></div>
        
          
          <div className = "absolute bottom-0">
          <Link to = '/'>
          <BotonSecundario>  Cerrar   Sesión    </BotonSecundario></Link>
          </div>
        </nav>
    )
}

export default  Sidebar;