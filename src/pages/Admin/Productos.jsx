import React from 'react'
import { Link } from 'react-router-dom';
import BotonExtra from '../../componentes/botones/BotonExtra';





const Productos = () => {
    const productoBackend = [
        {
            nombre: "hueso",
            ID: "1234",
            precio: "13.00",
            disponibilidad: Boolean,
        },

        {
            nombre: "hueso",
            ID: "1234",
            precio: "13.00",
            disponibilidad: Boolean,
        }


    ]
    return (
        <div className='absolute inset-y-0 right-32'>
            <div className="border-b pb-6 border-blue-400 mt-16">
                <h1 className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Administración de Productos
                </h1>
            </div>
            <div className="mt-10 ml-0">
                <Link to="/Admin/AddProduct"> < BotonExtra > Agregar Producto </BotonExtra></Link></div>
            <table className=' mt-10'>
                <thead>
                    <tr>
                        <th class="bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                ID del Producto
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class=" bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Producto
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Precio
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Disponibilidad
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Actualizar
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                        <th class="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Eliminar
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>

                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                        <div class="flex items-center justify-center">
                            <button className="bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
        focus:ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center"><i class="far fa-edit"></i></button>
                        </div>
                    </td>

                    <td>
                        <div class="flex items-center justify-center">
                            <button className="bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
        focus:ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center" ><i class="far fa-trash-alt"></i></button>
                        </div>
                    </td>

                </tbody>
            </table>
        </div>



    )
};




export default Productos;
