import React, { useEffect, useState } from 'react'
import AddVenta from './AddVenta';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
    const [colorBoton, setColorBoton] = useState('indigo');


    useEffect(() => {
            setVentas(ventasBackend);
    }, []);



    useEffect(() => {
        if (mostrarTabla){
            setTextBoton('Agregar Venta');
            setColorBoton('indigo');
        }else{
            setTextBoton('Mostrar historial de ventas')
            setColorBoton('red');
        }
    }, [mostrarTabla]);

    return (
        <div className="md:flex flex-col items-center">
            <div className="md:flex items-center border-b pb-6 border-blue-400">
                    <h1  className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">Administración de Ventas            
                    </h1>
                </div>
            <buttom 
            onClick = {() => [
                setMostrarTabla(!mostrarTabla)
            ]} className= {` bg-${colorBoton}-200 border-2 border-gray-500 flex items-center justify-center mt-7`}>
                {textBoton}</buttom>
            {mostrarTabla ?  (<TablaVentas listaVentas = {ventas}/>
            ) : (<AddVenta mostrarVentas  = {setMostrarTabla} modificarListaVentas = {setVentas}/>)}
            
            <ToastContainer
                position="bottom-center"
                autoClose={3000}/>
            
        </div>
    )
}


const TablaVentas = ({listaVentas}) =>{

    return(
        <div className = "flex justify-between justify-items-center">
        <table>
            <thead>
                <tr>
                    <td>Código del Producto</td>
                    <td>Nombre del Producto</td>
                    <td>ID del Cliente</td>
                    <td>Nombre del Cliente</td>
                </tr>
            </thead>
            <tbody>
                {listaVentas.map((ventas) => {
                    return(
                    <tr>
                    <td>{ventas.productNombre}</td>
                    <td>{ventas.productID}</td>
                    <td>{ventas.cxNombre}</td>
                    <td>{ventas.cxID}</td>
                </tr>)
                })}

            </tbody>

        </table></div>
    )
};








export default Ventas;
