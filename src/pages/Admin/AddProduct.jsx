import BotonExtra from '../../componentes/botones/BotonExtra';
import BotonSecundario from '../../componentes/botones/BotonSecundario';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react'
<link
    href="https://cdn.jsdelivr.net/npm/@tailwindcss/custom-forms@0.2.1/dist/custom-forms.css"
    rel="stylesheet"
/>



const AddProduct = () => {

    //Hooks para agregar producto en los inputs
    const [codigo_add, set_codigo_add] = useState("");
    const [nombre_add, set_nombre_add] = useState("");
    const [precio_unidad_add, set_precio_unidad_add] = useState(0);
    const [estado_add, set_estado_add] = useState("true");

    //Funcion para agregar a la DB
    const add_product_to_db = () => {
        console.log(codigo_add + nombre_add + precio_unidad_add + estado_add)
        
    }

    return (


        <div className='absolute inset-y-0 right-56 ml-12'>
            <div className="border-b pb-6 border-blue-400 mt-16">
                <h1 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Administración de Productos
                </h1>
            </div>
            <div className="mt-10 ml-0">
                <Link to="/Admin/productos"> < BotonExtra > Historial de Productos </BotonExtra></Link></div>

            <div tabindex="0" aria-label="form" class="focus:outline-none w-full bg-white p-10">

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
                                type="string"
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
                            <div class="mt-4">
                                <span class="text-gray-700">Estado</span>
                                <div class="mt-2">
                                    <label class="inline-flex items-center">
                                        <input type="radio" class="form-radio" name="estado" value="Disponible" id='0'
                                        onChange={(e) => {
                                            set_estado_add("Disponible")
                                        }
                                        }
                                        />
                                        <span class ="ml-2">Disponible</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6">
                                        <input type="radio" class="form-radio" name="estado" value="Agotado" id='1'
                                        onChange={(e) => {
                                            set_estado_add("Agotado")
                                        }
                                        }
                                        />
                                        <span class ="ml-2">Agotado</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <BotonSecundario>Guardar
                        </BotonSecundario></div>
                </form>
            </div>
        </div>

    )
}




export default AddProduct;