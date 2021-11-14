import React from "react";
import { Link } from "react-router-dom";
import BotonPrincipal from "../componentes/botones/BotonPrincipal";
import Perfile from "./Perfile";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar Sessión
    </button>
  )};

const Sidebar = () =>{
    return (
        <nav className = 'xl:w-2/6 w-2/6 bg-gradient-to-tl from-blue-300 to-orange-300 h-screen flex items-center flex-col fixed'>
          <div><Perfile ></Perfile>
          <h2 className= "text-sm text-center text-gray-600 mt-5 font-bold " >PERFIL ADMINISTRATIVO</h2>
          </div>
          <Link to = '/Admin'><BotonPrincipal>Inicio</BotonPrincipal></Link>
          <Link to = "/admin/ventasAdmin"><BotonPrincipal>Ventas</BotonPrincipal></Link>
          <Link to = '/admin/productos'><BotonPrincipal>Productos</BotonPrincipal></Link>
          <Link to = '/admin/gestionUser'><BotonPrincipal>Gestionar Usuarios</BotonPrincipal></Link>
        
          <div class="mt-16 bg-CBlue text-white focus:outline-none focus:ring-2 focus:ring-offset-1 
        focus:ring-gray-700 py-1.5 px-1.5 border rounded-lg border-gray-700 w-52 flex items-center justify-center">
          <LogoutButton></LogoutButton></div>
          
        </nav>)
    
}

export default  Sidebar;