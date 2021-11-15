import React from 'react'
import { Link } from 'react-router-dom';

const Vendedor = () => {
    return (
        
                <div className = 'absolute inset-y-0 right-32'>
                   
                <div className="md:flex flex-col items-center border-b pb-6 border-gray-200 ">
                <div className="border-b pb-6 border-blue-400 mt-10">
                            <h1  className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">El liderazgo transformar la visión en realidad
                    </h1></div>
        
                    <h2 role="contentinfo" tabIndex="0" className="w-96  text-sm text-center text-gray-600 mt-5">Sabemos que ellos nos hacen felices cada día y por eso merecen lo mejor. Con tu administración hemos llevado este sueño al mejor servicio de mascotas de la ciudad. Recibe bonos extra por llevar a tu equipo de ventas al primer puesto en ventas a final de mes.</h2>
                       
                     <div tabIndex="0" className="focus:outline-none">
        
                    <div className="mx-auto container py-8">
                    <Link to = '/admin/ventasAdmin'><div className="flex flex-wrap items-center lg:justify-between justify-center">
                            <div tabIndex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        
                                <div>
                                    <img alt="person capturing an image" src="https://i.ibb.co/1r5KWnQ/kissing-Dog.jpg" tabIndex="0" className="focus:outline-none w-full h-44" />
                                </div>
                                <div className="bg-white">
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">Gestion de Ventas</h2>
                                        </div>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 mt-2">¡Maneja tu negocio! Agrega y edita tus nuevas ventas. Ten un listado de tus ventas reciente y ten el historial tus clientes</p>
                                    </div>
                                </div>
                            </div>
                            </div></Link>
                            
                            </div>
                            
                            
        
                           
                                </div>
                            </div>
                         
                    </div>
                
           
                ) 
}

export default Vendedor;
