import React from 'react';
import { Link } from "react-router-dom";


const Patrocinadores = () => {
    return (
        <div className="mt-4">
            <Link exact={true} to="/*" className="text-decoration-none"><img
                className="d-block w-100 mb-3"
                src={`${process.env.PUBLIC_URL}Patrocinadores/publ_rc.png`}
                alt="Rolling Code"
            /></Link>
            <Link exact={true} to="/*" className="text-decoration-none"><img
                className="d-block w-100 mb-3"
                src={`${process.env.PUBLIC_URL}Patrocinadores/publ_coca.png`}
                alt="Coca-Cola"
            /></Link>
            <Link exact={true} to="/*" className="text-decoration-none"><img
                className="d-block w-100 mb-3"
                src={`${process.env.PUBLIC_URL}Patrocinadores/publ_dell.png`}
                alt="Dell"
            /></Link>
            <Link exact={true} to="/*" className="text-decoration-none"><img
                className="d-block w-100 mb-3"
                src={`${process.env.PUBLIC_URL}Patrocinadores/publ_google.png`}
                alt="Google"
            /></Link>



        </div>
    );
};

export default Patrocinadores;