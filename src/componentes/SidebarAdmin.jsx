import React from "react";
import { Link } from "react-router-dom";
import BotonPrincipal from "../componentes/botones/BotonPrincipal";
import logo from "../media/logo.png"
import BotonExtra from "../componentes/botones/BotonExtra"

const Sidebar = () =>{
    return (
        <nav className = 'xl:w-2/6 w-2/6 bg-gradient-to-tl from-blue-300 to-orange-300 h-screen flex items-center flex-col fixed'>
          <div className= 'flex-col items-center justify-center mb-0 mt-3'><img src={logo} alt= "logo" className = "rounded-lg h-36 w-36 flex items-center justify-center" />
          <h2 className= "text-sm text-center text-gray-600 mt-5 font-bold " >PERFIL ADMINISTRATIVO</h2>
          </div>
          <Link to = '/Admin'><BotonPrincipal>Inicio</BotonPrincipal></Link>
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