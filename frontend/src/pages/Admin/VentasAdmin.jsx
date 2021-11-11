import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BotonExtra from '../../componentes/botones/BotonExtra';
import Axios from 'axios'

const VentasAdmin = () => {
   
    //Hooks para agregar producto en los inputs
    const [codigo_venta_add, set_codigo_venta_add] = useState("");
    const [id_cliente_add, set_id_cliente_add] = useState("");
    const [nombre_cliente_add, set_nombre_cliente_add] = useState("");
    const [codigo_producto_add, set_codigo_producto_add] = useState("");
    const [nombre_producto_add, set_nombre_producto_add] = useState("");

  //Funcion para agregar ventas a la DB
  const add_ventas_to_db = () => {

        
    //1. Peticion POST a la DB
    Axios.post('http://localhost:3001/api/v1/ventas/add', {
        codigo_venta: codigo_venta_add,
        id_cliente: id_cliente_add,
        nombre_cliente: nombre_cliente_add,
        codigo_producto: codigo_producto_add,
        nombre_producto: nombre_producto_add,
    })
}

    //Hook para obtener la lista de las ventas desde la DB
    const [ventas, set_ventas] = useState([])

    useEffect(() => {
        //2. Petición LIST a la DB
        Axios.get('http://localhost:3001/api/v1/ventas/list').then((res) => {
            set_ventas(res.data.ventas)
        })

    }, [])

    const delete_ventas = (_id) => {
        //3. Petición de DELETE a la DB
        Axios.delete('http://localhost:3001/api/v1/ventas/delete/' + _id)
    }

    //Hooks para actualizar una venta en la DB
    const [id_update, set_id_update] = useState(0);
    const [codigo_venta_update, set_codigo_venta_update] = useState("");
    const [id_cliente_update, set_id_cliente_update] = useState("");
    const [nombre_cliente_update, set_nombre_cliente_update] = useState("");
    const [codigo_producto_update, set_codigo_producto_update] = useState("");
    const [nombre_producto_update, set_nombre_producto_update] = useState("");

    const update_ventas_to_db = (_id) => {
        console.log("Hola")
        //4. Peticion UPDATE a la DB
        Axios.put('http://localhost:3001/api/v1/ventas/update', {
            _id: _id,
            codigo_venta: codigo_venta_update,
            id_cliente: id_cliente_update,
            nombre_cliente: nombre_cliente_update,
            codigo_producto: codigo_producto_update,
            nombre_producto: nombre_producto_update,
        })
    }

    return (

        <div className='absolute inset-y-0 right-0 ml-auto'>
            <div className="border-b pb-6 border-blue-400 mt-16">
                <h1 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Administración de Ventas
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <Link to="/Admin/AddVentaAdmin"> < BotonExtra > Agregar Venta </BotonExtra></Link>
            </div>

            <table className=' mt-10'  >
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
                                Codigo de venta
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className=" bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                ID Cliente
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className="bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Nombre del cliente
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Codigo producto
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Nombre producto
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
                    {ventas.map((value, key) => (

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
                                        value={value.codigo_venta}
                                        disabled='true'
                                    ></input>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="text"
                                        required="required"
                                        value={value.id_cliente}
                                        disabled='true'
                                    ></input>
                                </div>
                            </td>
                            <div className="flex items-center justify-center">
                                <input
                                    type="text"
                                    required="required"
                                    value={value.nombre_cliente}
                                    disabled='true'
                                ></input>
                            </div>
                            <td>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="text"
                                        value={value.codigo_producto}
                                    ></input>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="text"
                                        required="required"
                                        value={value.nombre_producto}
                                        disabled='true'
                                    ></input>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    <button className="bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
                focus: ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center"><i className="far fa-edit"
                                            //Evento para editar una venta
                                            onClick={
                                                () => {
                                                    set_id_update(value._id);
                                                    set_codigo_venta_update(value.codigo_venta);
                                                    set_id_cliente_update(value.id_cliente);
                                                    set_nombre_cliente_update(value.nombre_cliente);
                                                    set_codigo_producto_update(value.codigo_producto);
                                                    set_nombre_producto_update(value.nombre_producto);
                                                    

                                                    document.getElementById('codigo_venta_update').defaultValue = value.codigo_venta;
                                                    document.getElementById('id_cliente_update').defaultValue = value.id_cliente;
                                                    document.getElementById('nombre_cliente_update').defaultValue = value.nombre_cliente;
                                                    document.getElementById('codigo_producto_update').defaultValue = value.codigo_producto;
                                                    document.getElementById('nombre_producto_update').defaultValue = value.nombre_producto;
                                                                                                     
                                                    
                                                }
                                            }></i></button>

                                </div>
                            </td>

                            <td>
                                <div className="flex items-center justify-center">
                                    <button className="bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
                        focus: ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center"
                                    //Evento para eliminar un producto
                                    ><i className="far fa-trash-alt" onClick={() => delete_ventas(value._id)}></i></button>
                                </div>
                            </td>
                        </tr>


                    ))}
                </tbody>
            </table>

            <div tabindex="0" aria-label="form" className="focus:outline-none w-full bg-white p-10">

                <h5 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-2x1 font-bold text-gray-800">Actualizar venta</h5>

                <form>
                <div className="mt-4 md:flex items-center">
                        <div className="flex flex-col">
                            <label htmlfor="productNombre" className="mb-3 text-sm leading-none text-gray-800">Codigo de venta</label>
                            <input
                                id="codigo_venta_update"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="1234567"
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_codigo_venta_update(e.target.value)
                                }

                                }
                            />
                        </div>
                    </div>

                    <div className="mt-4 md:flex items-center">
                    <div className="flex flex-col">
                            <label htmlfor="productNombre" className="mb-3 text-sm leading-none text-gray-800">Nombre del cliente</label>
                            <input
                                id="nombre_cliente_update"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="Pepito Perez"
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_nombre_cliente_update(e.target.value)
                                }

                                }
                            />

                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <label htmlfor="productID" className="mb-3 text-sm leading-none text-gray-800">ID Cliente</label>
                            <input
                                id="id_cliente_update"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="1234567"
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_id_cliente_update(e.target.value)
                                }
                                } />
                        </div>
                    </div>

                    <div className="mt-4 md:flex items-center">
                    <div className="flex flex-col">
                            <label htmlfor="productID" className="mb-3 text-sm leading-none text-gray-800">Codigo del producto</label>
                            <input
                                id="codigo_producto_update"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="1234567"
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_codigo_producto_update(e.target.value)
                                }
                                } />
                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <label htmlfor="productNombre" className="mb-3 text-sm leading-none text-gray-800">Nombre del producto</label>
                            <input
                                id="nombre_producto_update"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="Hueso de goma"
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_nombre_producto_update(e.target.value)
                                }

                                }
                            />

                        </div>
                    </div>

                    <div className="mt-4 md:flex items-center">
                        <div className="flex flex-col">
                            
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" //Evento para actualizar un producto en la DB
                            onClick={() => {update_ventas_to_db(id_update)}}>
                            Actualizar
                            </button>
                        </div>
                    </div>
                </form>

            </div>

        </div>

    )
};



export default VentasAdmin;
