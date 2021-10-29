import React from "react";
import {Link} from "react-router-dom";


const Login = () =>{
    return (
        <div className = 'flex w-full flex-col'>
            <h2>Inicia sesion en tu cuenta</h2>
            <form>
                <div>
                <input type= "email" placeholder= "ana@jopo.co" required />
                <input type= "password" required/>
                </div>
                <div>
                    <label htmlFor="recuerdame">
                        <input type = "checkbox" name = "recuerdame"/>
                        Recuerdame
                    </label>
                </div>
                <div>
                    <Link to = '/'> ¿Olvidast tu contraseña? </Link>
                </div>
                <div>
                    <Link to ='/admin'>
                    <button type = "submit"> Iniciar Sesion </button>
                    </Link>
                </div>
            </form>

        </div>
    )
}

export default  Login;