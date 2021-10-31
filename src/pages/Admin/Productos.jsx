import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct';


const productoBackend = [
    {
        nombre : "hueso",
        ID: "1234",
        precio: "13.00",
        cantidad: "14"
    },

    {
        nombre : "hueso",
        ID: "1234",
        precio: "13.00",
        cantidad: "14"
    }
    

]

const Productos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textBoton, setTextBoton] = useState('Agregar Venta');
    const [productos, setProductos] = useState([]);
    const [colorBoton, setColorBoton] = useState('blue');


    useEffect(() => {
            setProductos(productoBackend);
    }, []);



    useEffect(() => {
        if (mostrarTabla){
            setTextBoton('Agregar Venta');
            setColorBoton('blue');

        }else{
            setTextBoton('Historil de productos')
            setColorBoton('blue');
        }
    }, [mostrarTabla]);

    return (
        <div className = 'absolute inset-y-0 right-32'> 
            <div className="border-b pb-6 border-blue-400 ">
                    <h1  className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Administración de Ventas            
                    </h1></div>

            <div className="flex items-start justify-between mx-2 mt-16">
                    
                
            <buttom 
            onClick = {() => [
                setMostrarTabla(!mostrarTabla)
            ]} className= {` bg-${colorBoton}-400 focus:outline-none focus:ring-2 focus:ring-offset-1 
            focus:ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-52 font text-white justify-center flex-wrap`}>
                {textBoton}</buttom> </div>
            {mostrarTabla ?  (<TablaVentas listaVentas = {productos}/>
            ) : (<AddProduct mostrarVentas  = {setMostrarTabla} modificarListaVentas = {setProductos}/>)}

            
        </div>
    )
}


const TablaVentas = ({listaVentas}) =>{

    return(
        <div>
<div className= "p-10">
<div className= "border rounded-lg p-2 w-80 mb-6">
                    <input className = "w-64 p-1 rounded-lg" placeholder="Buscar un usuario"/>
                    <button><i className="fas fa-search"></i></button>
            </div>
        <table>
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
                    <th class= "bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Precio
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Cantidad
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>               

                {listaVentas.map((productos) => {
                    return(
                        <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                        <td class="p-2 border-r">{productos.nombre}</td>
                        <td class="p-2 border-r">{productos.ID}</td>
                        <td class="p-2 border-r">{productos.precio}</td>
                        <td class="p-2 border-r">{productos.cantidad}</td>
                        <td>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="edit icon" role="button" tabindex="0" class="focus:outline-none icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                </svg>
                        </td>
                    </tr>)
                })}
                
                
                
            </tbody>
        </table>
    </div>
       
    
        </div>
    )
};




export default Productos;
