import BotonExtra from '../../componentes/botones/BotonExtra';
import BotonSecundario from '../../componentes/botones/BotonSecundario';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import Axios from 'axios'


const AddProduct = () => {

    //Hooks para agregar producto en los inputs
    const [codigo_add, set_codigo_add] = useState("");
    const [nombre_add, set_nombre_add] = useState("");
    const [precio_unidad_add, set_precio_unidad_add] = useState(0);
    const [estado_add, set_estado_add] = useState("Disponible");

    //Funcion para agregar a la DB
    const add_product_to_db = () => {

        console.log(codigo_add + nombre_add + precio_unidad_add + estado_add)
        //1. Peticion POST a la DB
        Axios.post('http://localhost:3001/api/v1/product/add', {
            codigo: codigo_add,
            nombre: nombre_add,
            precio_unidad: precio_unidad_add,
            estado: estado_add
        })
    }

    return (


        <div className='absolute inset-y-0 right-56 ml-12'>
            <div className="border-b pb-6 border-blue-400 mt-16">
                <h1 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Administración de Productos
                </h1>
            </div>
            <div className="mt-10 ml-0">
                <Link to="/Admin/productos"> < BotonExtra > Historial de Productos </BotonExtra></Link></div>

            <div tabindex="0" aria-label="form" className="focus:outline-none w-full bg-white p-10">

                <p tabindex="0" className=" focus:outline-none text-sm font-light leading-tight text-gray-600 mt-4">Ingrese los datos del nuevo producto <br />Luego haga click en Guardar</p>
                <form>
                    <div className="mt-4 md:flex items-center">
                        <div className="flex flex-col">
                            <label htmlfor="productNombre" className="mb-3 text-sm leading-none text-gray-800">Nombre del Producto</label>
                            <input
                                name="productNombre"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="Corte de cabello"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_nombre_add(e.target.value)
                                }

                                }
                            />

                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <label htmlfor="productID" className="mb-3 text-sm leading-none text-gray-800">Código del Producto</label>
                            <input
                                name="productID"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="1234567"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_codigo_add(e.target.value)
                                }
                                } />
                        </div>
                    </div>
                    <div className="mt-12 md:flex items-center">
                        <div className="flex flex-col">
                            <label htmlfor="cxNombre" className="mb-3 text-sm leading-none text-gray-800">Precio</label>
                            <input
                                name="precio"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="0.00"
                                required
                                //Evento cambio de estado para el input
                                onChange={(e) => {
                                    set_precio_unidad_add(e.target.value)
                                }
                                }
                            />
                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <div className="mt-4">
                                <span className="text-gray-700">Estado</span>
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="estado" value="Disponible" id='0'
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_estado_add("Disponible")
                                            }
                                            }
                                        />
                                        <span className="ml-2">Disponible</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="estado" value="Agotado" id='1'
                                        //Evento cambio de estado para el input
                                            onClick={(e) => {
                                                set_estado_add("Agotado")

                                            }
                                            }
                                        />
                                        <span className="ml-2">Agotado</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" //Evento para agregar un producto a la DB
                        onClick={add_product_to_db}>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}


export default AddProduct;