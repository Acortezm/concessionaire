import React from 'react'
import BotonPrincipal from "../../componentes/botones/BotonPrincipal";

const Vendedor = () => {
    return (
        <div>
           
        <div className="md:flex flex-col items-center border-b pb-6 border-gray-200 ">
            <h1  className="flex items-center md:mt-0 mt-4" tabindex="0" role="heading" aria-label="Title" className="focus:outline-none text-3xl font-bold text-gray-800"> !Independizate con el mejor servicio para Mascotas!
            </h1>

            <h2 role="contentinfo" tabindex="0" class="w-96  text-sm text-center text-gray-600 mt-5">Ellos nos hacen felices cada día por eso merecen lo mejor. Con tu ayuda distribuimos el mejor servicio de mascotas de la ciudad. Recibe ganancias vendiendo nuestros servicios, con más de 50 opciones disponibles en nuestro catálogo.</h2>
        </div>
        <div class="2xl:px-20 lg:px-12 px-4 flex justify-center items-start mt-0 ">
            <div>
                <div class="flex items-end m-6">
                    <img tabindex="0" src="https://i.ibb.co/BV8FpLM/wellness-Dog.jpg" alt="cat dog" class="w-60 h-32 rounded-lg mr-2" />
                    <img tabindex="0" src="https://i.ibb.co/prMcKJJ/Bathing-Dog.jpg" alt="two dogs" class="w-32 h-36 rounded-lg ml-4 "/>
                    <img tabindex="0" src="https://i.ibb.co/G3DP5vp/both.jpg" class="w-48 h-48 rounded-lg m-4" />
                
                </div>
            
                <div class="flex items-start m-3">
                    <img tabindex="0" src="https://i.ibb.co/txCzmRT/Bathing-Cat.jpg" alt="girl with bluw background" class="w-48 h-48 rounded-lg m-4"/>
                    <img tabindex="0" class="w-48 h-48 rounded-lg" src="https://i.ibb.co/RCmn9J8/cutting-Nails.jpg" alt="young girl with red hair" class="w-24 h-24 rounded-lg ml-4" />
                    <img tabindex="0" class="w-72 h-56 rounded-lg ml-6" src="https://i.ibb.co/rKP7HSB/spaCat.jpg" alt="young girl with red hair"  class="w-48 h-48 rounded-lg m-4"/>
                    <img tabindex="0" src="https://i.ibb.co/6r8n1m5/spaDog.jpg" alt="smart cat" class="w-2-4 h-24 rounded-lg ml-4" />
                </div>
            </div>
            

        </div>
    
        </div>
    )
}

export default Vendedor;
