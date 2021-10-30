import React from 'react'

const CardVentas = (props) => {
    return (
        <div class="flex w-full items-center  justify-center py-12 px-6 mt-14">
            <div>
                <div class="w-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h4 tabindex="0" class="focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3">CLIENTE: {props.cxNombre}</h4>
                        <h6 tabindex="0" class="focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3">IDENTIFICACIÓN: {props.cxID}</h6>
                        <p tabindex="0" class="focus:outline-none text-gray-800 dark:text-gray-100 text-sm">NOMBRE DEL PRODUCTO: {props.productoNombre}</p>
                        <p tabindex="0" class="focus:outline-none text-gray-800 dark:text-gray-100 text-sm">CODIGO: {props.productoID}</p>
                    </div>
                    <div>
                        <div class="flex items-center justify-between text-gray-800">
                            <p tabindex="0" class="focus:outline-none text-sm dark:text-gray-100">{props.fecha}</p>
                            <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="edit icon" role="button" tabindex="0" class="focus:outline-none icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default CardVentas;
