import React from "react";
import guardado from "../../media/guardado.png"

const AddProduct = () =>{
    return (
        <div>
            
        <div tabindex="0" aria-label="form" class="focus:outline-none w-full bg-white p-10">
            <div className="md:flex items-center border-b pb-6 border-gray-200">
                <h1  className="flex items-center md:mt-0 mt-4" tabindex="0" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Información del Producto                
                </h1>
            </div>
            <p    tabindex="0" className=" focus:outline-none text-sm font-light leading-tight text-gray-600 mt-4">Ingrese los datos de su nuevo producto <br />Luego haga click en Guardar</p>
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
                    <label className="mb-3 text-sm leading-none text-gray-800">Descripción del Producto</label>
                    <input type="tex" tabindex="0" aria-label="Enter email Address" className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"  />
                </div>
                <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                    <label className="mb-3 text-sm leading-none text-gray-800">Precio del Producto</label>
                    <input type="number" tabindex="0" aria-label="Enter phone number" className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                </div>
            </div>
            
            <button role="button" aria-label="Next step" className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-50 md:mt-10 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                <span className="text-sm font-medium text-center text-gray-800 capitalize">Guardar</span>
            
                
            </button>
            <li><a href="#popUp">Guardar</a>
                <div id="popUp" className="popup bg-gray-200 fixed m-0 pointer-events-none transition-all opacity-20 ">
                <div className="bg-white 5 border-2 border-solid border-r-20 w-300 p-10 m-auto text-base relative opacity-20">
                
             
                <a href="#">X</a>
                <center>
                    <img src= {guardado} className = "w-50 h-50" alt="InternetCtrl"/>
                <p>Los cambios han sido guardados exitosamente.</p>
                </center>
            
        </div>  
                </div></li>
        </div>
        <style>
            .checkbox:checked + .check-icon {
                "display: flex"}
        </style>
    
        </div>
    )
}



export default  AddProduct;