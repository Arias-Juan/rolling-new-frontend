import React from 'react';
import { Link } from "react-router-dom";


const Patrocinadores = () => {
    return (
        <div className="mt-4 patrocinadores">
            <Link exact={true} to="/*" className="text-decoration-none">
                <img
                className="d-block w-100 mb-3 w-25"
                src={`${process.env.PUBLIC_URL}Patrocinadores/publ_rc.png`}
                alt="Rolling Code">

                </img>
            </Link>
            <Link exact={true} to="/*" className="text-decoration-none">
                <img
                className="d-block w-100 mb-3 w-25"
                src={`${process.env.PUBLIC_URL}Patrocinadores/publ_coca.png`}
                alt="Coca-Cola">

                </img>
            </Link>
            <Link exact={true} to="/*" className="text-decoration-none">
                <img
                className="d-block w-100 mb-3 w-25"
                src={`${process.env.PUBLIC_URL}Patrocinadores/publ_dell.png`}
                alt="Dell">

                </img>
            </Link>
            <Link exact={true} to="/*" className="text-decoration-none">
                <img
                className="d-block w-100 mb-3"
                src={`${process.env.PUBLIC_URL}Patrocinadores/publ_google.png`}
                alt="Google">

                </img>
            </Link>



        </div>
    );
};

export default Patrocinadores;