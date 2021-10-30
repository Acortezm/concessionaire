import React from 'react'
import CardVentas from '../../componentes/CardVentas';

const Ventas = () => {
    return (
        <div className = ' flex-col absolute inset-y-0 right-0'>
        
            <div className = 'absolute inset-y-0 right-64'> <input type="text" class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search anything..."/>
                <div class="absolute top-4 right-3"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
            </div>
       
        <CardVentas cxNombre = "Ronald"></CardVentas>

            
        </div>
    )
}

export default Ventas;
