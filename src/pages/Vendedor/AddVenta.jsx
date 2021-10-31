import React, {useEffect, useState, useRef} from 'react'


const AddVenta = () => {
    const form = useRef(null)
        
    const submitForm = (e) =>{
        const fd = new FormData(form.current)

        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key]=value;
        });
        console.log(nuevaVenta);
    }

        return (
            
                <div >
                
                <div tabindex="0" aria-label="form" class="focus:outline-none w-full bg-white p-10">
                    
                    <p    tabindex="0" className=" focus:outline-none text-sm font-light leading-tight text-gray-600 mt-4">Ingrese los datos de su venta <br />Luego haga click en Guardar</p>
                    <form onSubmit = {submitForm}>
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
                              
                <button type= "submit" 
                class="bg-CNaranja focus:outline-none focus:ring-2 focus:ring-offset-1 
                focus:ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-52 font text-white justify-center mx-2 mt-16 flex-wrap"
                
                >Guardar
                </button>
                
                </form>
                </div>
                </div>
            
        )
    }

export default AddVenta;
