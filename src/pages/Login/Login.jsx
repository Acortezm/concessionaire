import React from "react";
import logo from "../../media/logo.png"
import { useAuth0 } from "@auth0/auth0-react";
import BotonExtra from "../../componentes/botones/BotonExtra";
import { Link } from "react-router-dom";



const Login = () =>{
    const {isAuthenticated, loginWithRedirect} = useAuth0();

    if(isAuthenticated){
            return (<div class="h-full bg-gradient-to-tl from-yellow-300 to-orange-300 w-full py-16 px-4 flex items-center justify-center">
                    
            <div>
                <div class="flex flex-col items-center justify-center">
                <img src={logo} alt= "logo" className = "rounded-lg h-96 w-96 flex items-center justify-center" />
                    
                </div>
                <div class="flex justify-between items-center">
                <Link to= '/admin'><BotonExtra>Administrador</BotonExtra></Link>
                <Link to = '/vendedor'><BotonExtra>Vendedor</BotonExtra></Link></div>
            </div>
        
            </div>)
        } else{
            return (
                <div class="h-full bg-gradient-to-tl from-yellow-300 to-orange-300 w-full py-16 px-4 flex items-center justify-center">
                    
                <div>
                    <div class="flex flex-col items-center justify-center">
                    <img src={logo} alt= "logo" className = "rounded-lg h-96 w-96 flex items-center justify-center" />
                        
                    </div>
                    <div class="mt-16 ml-20 bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 
                focus:ring-gray-700 py-1.5 px-1.5 border rounded-lg border-gray-700 w-52 flex items-center justify-center">
                    <button onClick={() => loginWithRedirect()}>Iniciar Sesión</button></div>
                </div>
            
                </div>)}
    

    
    
            }
    

export default  Login;