import React from 'react'
import { Link } from 'react-router-dom';
import BotonExtra from '../../componentes/botones/BotonExtra'
import BotonSecundario from '../../componentes/botones/BotonSecundario'


const AddVenta = () => {

        return (
            
            <div className = 'absolute inset-y-0 right-56 ml-12'> 
            <div className="border-b pb-6 border-blue-400 mt-16">
                    <h1  className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Administración de Productos            
                    </h1>
                    </div>
                    <div className= "mt-10 ml-0">
                   <Link to = '/admin/ventasAdmin'> < BotonExtra > Historial de Ventas </BotonExtra></Link></div>
            
            <div tabindex="0" aria-label="form" class="focus:outline-none w-full bg-white p-10">
                
                <p    tabindex="0" className=" focus:outline-none text-sm font-light leading-tight text-gray-600 mt-4">Ingrese los datos del nuevo producto <br />Luego haga click en Guardar</p>
                <form>
                <div className="mt-4 md:flex items-center">
                 <div className="flex flex-col">
                        <label htmlfor= "productNombre" className="mb-3 text-sm leading-none text-gray-800">Nombre del Producto</label>
                        <input 
                        name = "productNombre" 
                        className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                        type = "text"
                        placeholder = "Corte de cabello"
                        required/>
    
                    </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label  htmlfor="productID"  className="mb-3 text-sm leading-none text-gray-800">Código del Producto</label>
                        <input 
                        name = "productID" 
                        className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                        type = "number"
                        placeholder = "1234567"
                        required />
                        </div>
                </div>
                <div className="mt-12 md:flex items-center">
                    <div className="flex flex-col">
                        <label htmlfor="cxNombre"  className="mb-3 text-sm leading-none text-gray-800">Nombre del Cliente</label>
                        <input 
                        name = "cxNombre" 
                        className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                        type = "text"
                        placeholder = "Laura"
                        required/>
                         </div>
                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                        <label htmlfor="cxID" className="mb-3 text-sm leading-none text-gray-800">Identificación del Cliente</label>
                        <input 
                        name = "cxID" 
                        className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                        type = "number"
                        placeholder = "123456789"
                        required />
                        </div>
                </div>
                          
                <div className= "mt-10">     
            <BotonSecundario>Guardar
            </BotonSecundario></div>
            
            </form>
            </div>
            </div>
            
        )
    }

export default AddVenta;
