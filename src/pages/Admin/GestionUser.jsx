import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BotonExtra from '../../componentes/botones/BotonExtra';
import Axios from 'axios'

const GestionUsers = () => {
   
    //Hooks para agregar producto en los inputs
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
    //Hook para obtener la lista de las ventas desde la DB
    const [usuarios, set_usuarios] = useState([])

    useEffect(() => {
        //2. Petición LIST a la DB
        Axios.get('http://localhost:3001/api/v1/usuarios/list').then((res) => {
            set_usuarios(res.data.usuarios)
        })

    }, [])

    const delete_usuarios = (_id) => {
        //3. Petición de DELETE a la DB
        Axios.delete('http://localhost:3001/api/v1/usuarios/delete/' + _id)
    }

    //Hooks para actualizar un usuario en la DB
    const [id_update, set_id_update] = useState(0);
    const [id_usuario_update, set_id_usuario_update] = useState("");
    const [nombre_usuario_update, set_nombre_usuario_update] = useState("");
    const [rol_usuario_update, set_rol_usuario_update] = useState("");
    const [estado_usuario_update, set_estado_usuario_update] = useState("");

    const update_usuarios_to_db = (_id) => {
        //4. Peticion UPDATE a la DB
        Axios.put('http://localhost:3001/api/v1/usuarios/update', {
            _id: _id,
            id_usuario: id_usuario_update,
            nombre_usuario: nombre_usuario_update,
            rol_usuario: rol_usuario_update,
            estado_usuario: estado_usuario_update,
        })
    }

    return (

        <div className='absolute inset-y-0 right-32'>
            <div className="border-b pb-6 border-blue-400 mt-16">
                <h1 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Registro de usuarios
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <Link to="/Admin/AddUser"> < BotonExtra > Agregar Usuario </BotonExtra></Link>
            </div>

            <table className=' mt-10'>
                <thead>
                    <tr>
                        <th className="bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                No.
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>

                        <th className="bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                ID Usuario
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className=" bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Nombre Usuario
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className="bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Rol Usuario
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Estado
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                       
                        <th className="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Editar
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Eliminar
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>

                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((value, key) => (

                        <tr className="bg-white border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <td>
                                <div className="flex items-center justify-center">
                                    {key}
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="text"
                                        required="required"
                                        value={value.id_usuario}
                                        disabled='true'
                                    ></input>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="text"
                                        required="required"
                                        value={value.nombre_usuario}
                                        disabled='true'
                                    ></input>
                                </div>
                            </td>
                            <div className="flex items-center justify-center">
                                <input
                                    type="text"
                                    required="required"
                                    value={value.rol_usuario}
                                    disabled='true'
                                ></input>
                            </div>
                            <td>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="text"
                                        value={value.estado_usuario}
                                    ></input>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    <button className="bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
                focus: ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center"><i className="far fa-edit"
                                            //Evento para editar un usuario
                                            onClick={
                                                () => {
                                                    set_id_update(value._id);
                                                    set_id_usuario_update(value.id_usuario);
                                                    set_nombre_usuario_update(value.nombre_usuario);
                                                    set_rol_usuario_update(value.rol_usuario);
                                                    set_estado_usuario_update(value.estado_usuario);
                                                    
                                                    document.getElementById('id_usuario_update').defaultValue = value.id_usuario;
                                                    document.getElementById('nombre_usuario_update').defaultValue = value.nombre_usuario;

                                                    
                                                    if(value.rol_usuario=='Administrador'){
                                                        document.getElementById('rol_usuario_vendedor').checked = false;
                                                        document.getElementById('rol_usuario_admin').checked = true;
                                                    } 
                                                    if(value.rol_usuario=='Vendedor'){
                                                        document.getElementById('rol_usuario_vendedor').checked = true;
                                                        document.getElementById('rol_usuario_admin').checked = false;
                                                    }
                                                    
                                                    if(value.estado_usuario=='Pendiente'){
                                                        document.getElementById('estado_usuario_pendiente').checked = true;
                                                        document.getElementById('estado_usuario_autorizado').checked = false;
                                                        document.getElementById('estado_usuario_noautorizado').checked = false;
                                                    } 
                                                    if(value.estado_usuario=='Autorizado'){
                                                        document.getElementById('estado_usuario_pendiente').checked = false;
                                                        document.getElementById('estado_usuario_autorizado').checked = true;
                                                        document.getElementById('estado_usuario_noautorizado').checked = false;
                                                    }
                                                    if(value.estado_usuario=='No Autorizado'){
                                                        document.getElementById('estado_usuario_pendiente').checked = false;
                                                        document.getElementById('estado_usuario_autorizado').checked = false;
                                                        document.getElementById('estado_usuario_noautorizado').checked = true;
                                                    } 
                                                }
                                            }></i></button>

                                </div>
                            </td>

                            <td>
                                <div className="flex items-center justify-center">
                                    <button className="bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
                        focus: ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center"
                                    //Evento para eliminar un usuario
                                    ><i className="far fa-trash-alt" onClick={() => delete_usuarios(value._id)}></i></button>
                                </div>
                            </td>
                        </tr>


                    ))}
                </tbody>
            </table>

            <div tabindex="0" aria-label="form" className="focus:outline-none w-full bg-white p-10">

                <h5 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-2x1 font-bold text-gray-800">Actualizar usuario</h5>

                <form>
                <div className="mt-4 md:flex items-center">
                        <div className="flex flex-col">
                            <label htmlfor="id_usuario" className="mb-3 text-sm leading-none text-gray-800">ID del Usuario</label>
                            <input
                                id = 'id_usuario_update'
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="1234567"
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_id_usuario_update(e.target.value)
                                }

                                }
                            />

                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <label htmlfor="nombre_usuario" className="mb-3 text-sm leading-none text-gray-800">Nombre del usuario</label>
                            <input
                                id="nombre_usuario_update"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="Pepito Perez"
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_nombre_usuario_update(e.target.value)
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
                                        <input type="radio" className="form-radio" name="rol" value="Administrador" id = "rol_usuario_admin"
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_rol_usuario_update("Administrador")
                                            }
                                            }
                                        />
                                        <span className="ml-2">Administrador</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="rol" value="Vendedor" id = "rol_usuario_vendedor"
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_rol_usuario_update("Vendedor")

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
                                        <input type="radio" className="form-radio" name="estado" value="Pendiente" id="estado_usuario_pendiente"
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_estado_usuario_update("Pendiente")
                                            }
                                            }
                                        />
                                        <span className="ml-2">Pendiente</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="estado" value="Autorizado"  id="estado_usuario_autorizado"
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_estado_usuario_update("Autorizado")

                                            }
                                            }
                                        />
                                        <span className="ml-2">Autorizado</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="estado" value="No Autorizado"  id="estado_usuario_noautorizado"
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_estado_usuario_update("No Autorizado")

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
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" //Evento para agregar un producto a la DB
                        onClick={update_usuarios_to_db(id_update)}>
                            Actualizar
                        </button>
                    </div>
                </form>

            </div>

        </div>

    )
};



export default GestionUsers;
