import { Link } from 'react-router-dom';
import BotonExtra from '../../componentes/botones/BotonExtra';
import BotonSecundario from '../../componentes/botones/BotonSecundario';
import React, { useState } from 'react'
import Axios from 'axios'


const AddUser = () => {

    //Hooks para agregar usuario en los inputs
    const [id_usuario_add, set_id_usuario_add] = useState("");
    const [nombre_usuario_add, set_nombre_usuario_add] = useState("");
    const [rol_usuario_add, set_rol_usuario_add] = useState("");
    const [estado_usuario_add, set_estado_usuario_add] = useState("");


    //Funcion para agregar a la DB
    const add_usuarios_to_db = () => {
        
        //1. Peticion POST a la DB
        Axios.post('http://localhost:3001/api/v1/usuarios/add', {
            id_usuario: id_usuario_add,
            nombre_usuario: nombre_usuario_add,
            rol_usuario: rol_usuario_add,
            estado_usuario: estado_usuario_add,
        })
    }

    return (
<div className='absolute inset-y-0 right-56 ml-12'>
            <div className="border-b pb-6 border-blue-400 mt-16">
                <h1 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Gestión de usuarios
                </h1>
            </div>
            <div className="mt-10 ml-0">
                <Link to="/Admin/GestionUser"> < BotonExtra > Registro de usuarios </BotonExtra></Link></div>

            <div tabindex="0" aria-label="form" className="focus:outline-none w-full bg-white p-10">

                <p tabindex="0" className=" focus:outline-none text-sm font-light leading-tight text-gray-600 mt-4">Ingrese los datos usuario<br />Luego haga click en Guardar</p>
                <form>
                    <div className="mt-4 md:flex items-center">
                        <div className="flex flex-col">
                            <label htmlfor="id_usuario" className="mb-3 text-sm leading-none text-gray-800">ID del Usuario</label>
                            <input
                                name="id_usuario"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="1234567"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_id_usuario_add(e.target.value)
                                }

                                }
                            />

                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <label htmlfor="nombre_usuario" className="mb-3 text-sm leading-none text-gray-800">Nombre del usuario</label>
                            <input
                                name="nombre_usuario"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="Pepito Perez"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_nombre_usuario_add(e.target.value)
                                }
                                } />
                        </div>
                    </div>
                    <div className="mt-4 md:flex items-center">
                    <div className="flex flex-col">
                            <div className="mt-4">
                                <span className="text-gray-700">Rol del usuario</span>
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="rol" value="Administrador" id='0'
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_rol_usuario_add("Administrador")
                                            }
                                            }
                                        />
                                        <span className="ml-2">Administrador</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="rol" value="Vendedor" id='1'
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_rol_usuario_add("Vendedor")

                                            }
                                            }
                                        />
                                        <span className="ml-2">Vendedor</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:ml-16 md:mt-0 mt-12">
                            <div className="mt-4">
                                <span className="text-gray-700">Estado</span>
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="estado" value="Pendiente" id='2'
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_estado_usuario_add("Pendiente")
                                            }
                                            }
                                        />
                                        <span className="ml-2">Pendiente</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="estado" value="Autorizado" id='3'
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_estado_usuario_add("Autorizado")

                                            }
                                            }
                                        />
                                        <span className="ml-2">Autorizado</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="estado" value="No Autorizado" id='4'
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_estado_usuario_add("No Autorizado")

                                            }
                                            }
                                        />
                                        <span className="ml-2">No Autorizado</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" //Evento para agregar un usuario a la DB
                        onClick={add_usuarios_to_db}>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}


export default AddUser
