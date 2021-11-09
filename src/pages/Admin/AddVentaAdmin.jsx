import { Link } from 'react-router-dom';
import BotonExtra from '../../componentes/botones/BotonExtra';
import BotonSecundario from '../../componentes/botones/BotonSecundario';
import React, { useState } from 'react'
import Axios from 'axios'


const AddVentas = () => {

    //Hooks para agregar producto en los inputs
    const [codigo_venta_add, set_codigo_venta_add] = useState("");
    const [id_cliente_add, set_id_cliente_add] = useState("");
    const [nombre_cliente_add, set_nombre_cliente_add] = useState("");
    const [codigo_producto_add, set_codigo_producto_add] = useState("");
    const [nombre_producto_add, set_nombre_producto_add] = useState("");
    const [cantidad_add, set_cantidad_add] = useState(0);
    const [total_add, set_total_add] = useState(0);
    

    //Funcion para agregar a la DB
    const add_ventas_to_db = () => {

        
        //1. Peticion POST a la DB
        Axios.post('http://localhost:3001/api/v1/ventas/add', {
            codigo_venta: codigo_venta_add,
            id_cliente: id_cliente_add,
            nombre_cliente: nombre_cliente_add,
            codigo_producto: codigo_producto_add,
            nombre_producto: nombre_producto_add,
            cantidad: cantidad_add,
            total: total_add
        })
    }

    return (


        <div className='absolute inset-y-0 right-56 ml-12'>
            <div className="border-b pb-6 border-blue-400 mt-16">
                <h1 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Administración de Ventas
                </h1>
            </div>
            <div className="mt-10 ml-0">
                <Link to="/Admin/VentasAdmin"> < BotonExtra > Historial de Ventas </BotonExtra></Link></div>

            <div tabindex="0" aria-label="form" className="focus:outline-none w-full bg-white p-10">

                <p tabindex="0" className=" focus:outline-none text-sm font-light leading-tight text-gray-600 mt-4">Ingrese los datos de la venta <br />Luego haga click en Guardar</p>
                <form>
                    <div className="mt-4 md:flex items-center">
                        <div className="flex flex-col">
                            <label htmlfor="productNombre" className="mb-3 text-sm leading-none text-gray-800">Codigo de venta</label>
                            <input
                                name="codigoVenta"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="1234567"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_codigo_venta_add(e.target.value)
                                }

                                }
                            />
                        </div>
                    </div>

                    <div className="mt-4 md:flex items-center">
                    <div className="flex flex-col">
                            <label htmlfor="productNombre" className="mb-3 text-sm leading-none text-gray-800">Nombre del cliente</label>
                            <input
                                name="nombreCliente"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="Pepito Perez"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_nombre_cliente_add(e.target.value)
                                }

                                }
                            />

                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <label htmlfor="productID" className="mb-3 text-sm leading-none text-gray-800">ID Cliente</label>
                            <input
                                name="clienteID"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="1234567"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_id_cliente_add(e.target.value)
                                }
                                } />
                        </div>
                    </div>

                    <div className="mt-4 md:flex items-center">
                    <div className="flex flex-col">
                            <label htmlfor="productID" className="mb-3 text-sm leading-none text-gray-800">Codigo del producto</label>
                            <input
                                name="codigoProducto"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="1234567"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_codigo_producto_add(e.target.value)
                                }
                                } />
                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <label htmlfor="productNombre" className="mb-3 text-sm leading-none text-gray-800">Nombre del producto</label>
                            <input
                                name="nombreProducto"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="Hueso de goma"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_nombre_producto_add(e.target.value)
                                }

                                }
                            />

                        </div>
                    </div>


                    <div className="mt-4 md:flex items-center">
                        <div className="flex flex-col">
                            <label htmlfor="productID" className="mb-3 text-sm leading-none text-gray-800">Cantidad</label>
                            <input
                                name="cantidad"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="0"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_cantidad_add(e.target.value)
                                }
                                } />
                        </div>

                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <label htmlfor="productID" className="mb-3 text-sm leading-none text-gray-800">Total</label>
                            <input
                                name="total"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="0.00"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_total_add(e.target.value)
                                }
                                } />
                        </div>
                    </div>

                    <div className="mt-10">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" //Evento para agregar un producto a la DB
                        onClick={add_ventas_to_db}>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}


export default AddVentas;