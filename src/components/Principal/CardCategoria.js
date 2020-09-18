import React from 'react';
import { Link } from "react-router-dom";


const CardCategoria = (props) => {
    //console.log(props.divNoticia)
    let sectionStyle = {
        /*width: "100%",
        height: "400px",*/
        backgroundImage: `url(${props.divNoticia.imagenPrincipal})`
      };
    return (
        <Link exact={true} to="/*" className="text-decoration-none cardCategoria">
            <div className="p-3 my-3 shadow border rounded mr-1 cardCategoria text-center" style={sectionStyle}>
                <p className="card-titulo text-decoration-none tituloNoticiaCagetoria">
                    {props.divNoticia.tituloNoticia}
                </p>
                <p className='descripcionNoticiaCategoria'>{props.divNoticia.descripcionBreve}</p>
            </div>
        </Link>
    );
};

export default CardCategoria;