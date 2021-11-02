import React, { useEffect, useState } from 'react'
import AddVenta from './AddVenta';
import BotonPrincipal from '../../componentes/botones/BotonPrincipal';
const ventasBackend = [
    {
        productNombre : "corola",
        productID: "totoyota",
        cxNombre: "Laura",
        cxID: "1234"
    },
    {
        productNombre : "corola",
        productID: "totoyota",
        cxNombre: "Laura",
        cxID: "1234"
    },
    {
        productNombre : "corola",
        productID: "totoyota",
        cxNombre: "Laura",
        cxID: "1234"
    },
    {
        productNombre : "corola",
        productID: "totoyota",
        cxNombre: "Laura",
        cxID: "1234"
    },
]

const Ventas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textBoton, setTextBoton] = useState('Agregar Venta');
    const [ventas, setVentas] = useState([]);
    const [colorBoton, setColorBoton] = useState('blue');


    useEffect(() => {
            setVentas(ventasBackend);
    }, []);



    useEffect(() => {
        if (mostrarTabla){
            setTextBoton('Agregar Venta');
            setColorBoton('blue');

        }else{
            setTextBoton('Mostrar historial de ventas')
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
            {mostrarTabla ?  (<TablaVentas listaVentas = {ventas}/>
            ) : (<AddVenta mostrarVentas  = {setMostrarTabla} modificarListaVentas = {setVentas}/>)}
           
            
        </div>
    )
}


const TablaVentas = ({listaVentas}) =>{

    return(
        <div>
<div className= "p-10">
    <div>
  <BotonPrincipal> Lista de Ventas </BotonPrincipal></div>
        <table>
            <thead>
                <tr>
                    <th class="bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            ID del Cliente
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class=" bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Cliente
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class= "bg-gray-50 border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Codigo del Producto
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="bg-gray-50 border-b  p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Nombre del Producto
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>               

                {listaVentas.map((ventas) => {
                    return(
                        <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                        <td class="p-2 border-r">{ventas.cxID}</td>
                        <td class="p-2 border-r">{ventas.cxNombre}</td>
                        <td class="p-2 border-r">{ventas.productID}</td>
                        <td class="p-2 border-r">{ventas.productNombre}</td>
                        <td>
                            <button className="bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
        focus:ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center"><i class="far fa-edit"></i></button>
                        </td>
                        <td>
                            <button className="bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
        focus:ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center" ><i class="far fa-trash-alt"></i></button>
                        </td>
                        
                    </tr>)
                })}
                
                
                
            </tbody>
        </table>
    </div>
       
    
        </div>
    )
};








export default Ventas;
