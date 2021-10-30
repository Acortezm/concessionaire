import React from 'react'
import BotonSecundario from "../../componentes/botones/BotonSecundario";
const EditVenta = () => {
    return (
        <div className = 'absolute inset-y-0 right-32'>
            
            <div tabindex="0" aria-label="form" class="focus:outline-none w-full bg-white p-10">
                <div className="md:flex items-center border-b pb-6 border-blue-400">
                    <h1  className="flex items-center md:mt-0 mt-4" tabindex="0" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Información de Venta              
                    </h1>
                </div>
                <p    tabindex="0" className=" focus:outline-none text-sm font-light leading-tight text-gray-600 mt-4">Ingrese los datos de su venta <br />Luego haga click en Guardar</p>
                <div className="mt-4 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Nombre del Producto</label>
                        <input type="name" tabindex="0" aria-label="Enter first name" className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"/>
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Código del Producto</label>
                        <input type="number" tabindex="0" aria-label="Enter last name" className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"/>
                    </div>
                </div>
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label className="mb-3 text-sm leading-none text-gray-800">Nombre del Cliente</label>
                        <input type="tex" tabindex="0" aria-label="Enter email Address" className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"  />
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label className="mb-3 text-sm leading-none text-gray-800">Identificación del Cliente</label>
                        <input type="number" tabindex="0" aria-label="Enter phone number" className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                    </div>
                </div>
                
                <div className = "mt-16 flex items-center justify-center">
            
            <BotonSecundario>Guardar</BotonSecundario></div>
            </div>
            </div>
    )
}

export default EditVenta;
