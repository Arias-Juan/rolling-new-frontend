import React from 'react';
import imgPrueba from "../../img/Pruebas/banner-publicidad-01.jpg";

const PublicidadH = () => {
    return (
        <div className="container-fluid">
            <div className="text-center mb-3 mt-1">
                <img src={imgPrueba} alt="Publicidad horizontal" className="img-fluid">
                </img>
            </div>
        </div>
    );
};

export default PublicidadH;