import React from 'react'
import { Link } from 'react-router-dom';
const Admin = () => {
    return (

        <div className = 'absolute inset-y-0 right-32'>
           
        <div className="md:flex flex-col items-center border-b pb-6 border-gray-200 ">
        <div className="border-b pb-6 border-blue-400 mt-10">
                    <h1  className="flex items-center md:mt-0 mt-4" role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800">El liderazgo transformar la visión en realidad
            </h1></div>

            <h2 role="contentinfo" tabindex="0" class="w-96  text-sm text-center text-gray-600 mt-5">Sabemos que ellos nos hacen felices cada día y por eso merecen lo mejor. Con tu administración hemos llevado este sueño al mejor servicio de mascotas de la ciudad. Recibe bonos extra por llevar a tu equipo de ventas al primer puesto en ventas a final de mes.</h2>
               
             <div tabindex="0" class="focus:outline-none">

            <div class="mx-auto container py-8">
            <Link to = '/admin/ventasAdmin'><div class="flex flex-wrap items-center lg:justify-between justify-center">
                    <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">

                        <div>
                            <img alt="person capturing an image" src="https://i.ibb.co/1r5KWnQ/kissing-Dog.jpg" tabindex="0" class="focus:outline-none w-full h-44" />
                        </div>
                        <div class="bg-white">
                            <div class="p-4">
                                <div class="flex items-center">
                                    <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">Gestion de Ventas</h2>
                                </div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 mt-2">¡Maneja tu negocio! Agrega y edita tus nuevas ventas. Ten un listado de tus ventas reciente y ten el historial tus clientes</p>
                            </div>
                        </div>
                    </div>
                    </div></Link>
                    




                    <Link to = "/admin/productos"><div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="person capturing an image" src="https://i.ibb.co/rKP7HSB/spaCat.jpg" tabindex="0" class="focus:outline-none w-full h-44" />
                        </div>
                            <div class="p-4">
                                <div class="flex items-center">
                                    <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">Gestion de Productos</h2>
                                </div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 mt-2">Agrega y edita los productos para un catalogo mas personalizado basado en nuestros servicios.</p>
                            </div>
                        </div></Link>
                    </div>
                    
                    

                    <Link to = "/admin/gestionUser"><div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="person capturing an image" src="https://i.ibb.co/d5pKvV5/group2.jpg" tabindex="0" class="focus:outline-none w-full h-44" />
                        </div>
                        <div class="bg-white">
                            <div class="p-4">
                                <div class="flex items-center">
                                    <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">Gestion de Usuarios</h2>
                                </div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 mt-2">¡Maneja tu equipo! Agrega a los nuevos integrantes de tu equipo, cambia y actualiz sus estados y roles</p>
                                
                                </div>
                            </div>
                        </div></Link>
                        </div>
                    </div>
                 
            </div>
        
    )
}

export default Admin;
