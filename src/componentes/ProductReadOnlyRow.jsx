import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'

const ProductReadOnlyRow = ({value,key}) => {
    //Hook para obtener la lista de los productos desde la DB
    const [products, set_products] = useState([])

    //Hooks para actualizar un producto en a la DB
    const [codigo_update, set_codigo_update] = useState("");
    const [nombre_update, set_nombre_update] = useState("");
    const [precio_unidad_update, set_precio_unidad_update] = useState(0);
    const [estado_update, set_estado_update] = useState("Disponible");

    

    const delete_product = (_id) => {
        //3. Petición de DELETE a la DB
        Axios.delete('http://localhost:3001/api/v1/product/delete/' + _id)
    }

    return (

        <tr className="bg-white border-b p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
        <td>
            <div className="flex items-center justify-center">
                {key}
            </div>
        </td>
        <td>
            <div className="flex items-center justify-center">
                {value.codigo}
            </div>
        </td>
        <td>
            <div className="flex items-center justify-center">

                <input
                    type="text"
                    required="required"
                    name="nombre"
                    id='nombre_update'
                    value={value.nombre}
                    disabled = 'true'
                ></input>

            </div>
        </td>
        <div className="flex items-center justify-center">
            <input
                type="text"
                required="required"
                name="precio_unidad"
                id='precio_update'
                value={value.precio_unidad}
                disabled = 'true'
            ></input>
        </div>
        <td>
            <div className="flex items-center justify-center">
                <input
                    type="text"
                    required="required"
                    name="estado"
                    id='estado_update'
                    value={value.estado}
                    disabled = 'true'
                ></input>
            </div>
        </td>
        <td>
            <div className="flex items-center justify-center">
                <button className="bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
                    focus: ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center"><i className="far fa-edit"
                        //Evento para editar un producto
                        onClick={
                            () => {
                                set_codigo_update(value.codigo);
                                set_nombre_update(value.nombre);
                                set_precio_unidad_update(value.precio_unidad);
                                set_estado_update(value.estado);

                                document.getElementById('codigo_update').defaultValue = value.codigo;
                                document.getElementById('codigo_update').defaultValue = value.codigo;

                            }
                        }></i></button>

            </div>
        </td>

        <td>
            <div className="flex items-center justify-center">
                <button className="bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-1 
                            focus: ring-gray-700 py-2 px-2 border rounded-lg border-gray-200 flex items-center w-8 font text-white justify-center"
                //Evento para eliminar un producto
                ><i className="far fa-trash-alt" onClick={() => delete_product(value._id)}></i></button>
            </div>
        </td>
    </tr>
        
    )
}

export default ProductReadOnlyRow