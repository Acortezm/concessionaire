import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BotonExtra from '../../componentes/botones/BotonExtra';
import Axios from 'axios'
import ProductReadOnlyRow from '../../componentes/ProductReadOnlyRow';


const Productos = () => {

    //Hook para obtener la lista de los productos desde la DB
    const [products, set_products] = useState([])

    //Hooks para actualizar un producto en a la DB
    const [codigo_update, set_codigo_update] = useState("");
    const [nombre_update, set_nombre_update] = useState("");
    const [precio_unidad_update, set_precio_unidad_update] = useState(0);
    const [estado_update, set_estado_update] = useState("Disponible");

    useEffect(() => {
        //2. Petición LIST a la DB
        Axios.get('http://localhost:3001/api/v1/product/list').then((res) => {
            set_products(res.data.products)
        })

    }, [])

    const delete_product = (_id) => {
        //3. Petición de DELETE a la DB
        Axios.delete('http://localhost:3001/api/v1/product/delete/' + _id)
    }

    return (

        <div className='absolute inset-y-0 right-32'>
            <div className="border-b pb-6 border-blue-400 mt-16">
                <h1 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Administración de Productos
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <Link to="/Admin/AddProduct"> < BotonExtra > Agregar Producto </BotonExtra></Link>
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
                                ID del Producto
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className=" bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Producto
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className="bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Precio
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th className="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                Disponibilidad
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

                    {products.map((value, key) => (

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
                                        name="codigo"
                                        id='codigo_update'
                                        value={value.codigo}
                                        disabled='true'
                                    ></input>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">

                                    <input
                                        type="text"
                                        required="required"
                                        name="nombre"
                                        id='nombre_update'
                                        value={value.nombre}
                                        disabled='true'
                                    ></input>

                                </div>
                            </td>
                            <div className="flex items-center justify-center">
                                <input
                                    type="text"
                                    required="required"
                                    name="precio_unidad"
                                    id='precio_update'
                                    value={value.precio_unidad}
                                    disabled='true'
                                ></input>
                            </div>
                            <td>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="text"
                                        required="required"
                                        name="estado"
                                        id='estado_update'
                                        value={value.estado}
                                        disabled='true'
                                    ></input>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    <button className="bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
                focus: ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center"><i className="far fa-edit"
                                            //Evento para editar un producto
                                            onClick={
                                                () => {
                                                    set_codigo_update(value.codigo);
                                                    set_nombre_update(value.nombre);
                                                    set_precio_unidad_update(value.precio_unidad);
                                                    set_estado_update(value.estado);

                                                    document.getElementById('codigo_update').defaultValue = value.codigo;
                                                    document.getElementById('codigo_update').defaultValue = value.codigo;

                                                }
                                            }></i></button>

                                </div>
                            </td>

                            <td>
                                <div className="flex items-center justify-center">
                                    <button className="bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
                        focus: ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center"
                                    //Evento para eliminar un producto
                                    ><i className="far fa-trash-alt" onClick={() => delete_product(value._id)}></i></button>
                                </div>
                            </td>
                        </tr>


                    ))}
                </tbody>
            </table>

            <div tabindex="0" aria-label="form" className="focus:outline-none w-full bg-white p-10">

                <h5 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-2x1 font-bold text-gray-800">Actualizar producto</h5>

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
                            />

                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <label htmlfor="productID" className="mb-3 text-sm leading-none text-gray-800">Código del Producto</label>
                            <input
                                name="productID"
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                type="text"
                                placeholder="1234567"
                                required />
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
                            />
                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <div className="mt-4">
                                <span className="text-gray-700">Estado</span>
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="estado" value="Disponible" id='0'
                                        />
                                        <span className="ml-2">Disponible</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" className="form-radio" name="estado" value="Agotado" id='1'
                                        />
                                        <span className="ml-2">Agotado</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 md:flex items-center">
                        <div className="flex flex-col">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Guardar
                            </button>
                        </div>
                        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </form>

            </div>

        </div>

    )
};




export default Productos;
