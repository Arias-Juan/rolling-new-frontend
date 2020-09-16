import React from 'react';
import { Link } from "react-router-dom";


const CardCategoria = () => {
    return (
        <Link exact={true} to="/*" className="text-decoration-none">
            <div className="p-3 my-3 shadow border rounded mr-1 cardCategoria text-center">

                <Link exact={true} to="/*" className="card-titulo text-decoration-none">
                    Titulo de la Noticia
                </Link>
                <p className='descripcionNoticiaCategoria'>Breve descripcion o nada</p>

            </div>
        </Link>
    );
};

export default CardCategoria;