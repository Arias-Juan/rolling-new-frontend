import React from 'react';
import { Link } from "react-router-dom";


const CardCategoria = (props) => {
    //console.log(props.divNoticia)
    
    return (
        <Link exact={true} to="/*" className="text-decoration-none">
            <div className="p-3 my-3 shadow border rounded mr-1 cardCategoria text-center">
                <Link exact={true} to="/*" className="card-titulo text-decoration-none">
                    {props.divNoticia.tituloNoticia}
                </Link>
                <p className='descripcionNoticiaCategoria'>{props.divNoticia.descripcionBreve}</p>
            </div>
        </Link>
    );
};

export default CardCategoria;