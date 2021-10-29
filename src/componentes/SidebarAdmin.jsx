import React from "react";
import { Link } from "react-router-dom";
import BotonPrincipal from "../componentes/botones/BotonPrincipal";
import logo from "../media/logo.png"
import BotonExtra from "../componentes/botones/BotonExtra"

const Sidebar = () =>{
    return (
        <nav className = 'w-72 bg-gradient-to-tl from-blue-300 to-orange-300'>
          <img src={logo} alt= "logo" className = "rounded-full h-40 w-40 flex items-center justify-center" />
          <Link to = "/admin/ventas"><BotonPrincipal>Ventas</BotonPrincipal></Link>
          <Link to = '/admin/addVenta'><BotonPrincipal>Agregar Venta</BotonPrincipal></Link>
          <Link to = '/admin/productos'><BotonPrincipal>Productos</BotonPrincipal></Link>
          <Link to = '/admin/addproduct'><BotonPrincipal>Agregar Productos</BotonPrincipal></Link>
          <Link to = '/admin/gestionUser'><BotonPrincipal>Gestionar Usuarios</BotonPrincipal></Link>
        
          <Link to = '/'>
          <BotonExtra>  Cerrar   Sesión    </BotonExtra></Link>
          
        </nav>
    )
}

export default  Sidebar;