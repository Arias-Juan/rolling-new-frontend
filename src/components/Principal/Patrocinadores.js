import React from 'react';

const Patrocinadores = () => {
    return (
        <div className="mt-4 patrocinadores d-none d-sm-block">
            <a className="text-decoration-none" href="https://rollingcodeschool.com/"
                target="blank_">
                <img
                    className="d-block w-100 mb-3 w-25"
                    src={`${process.env.PUBLIC_URL}Patrocinadores/publ_rc.png`}
                    alt="Rolling Code">

                </img>
            </a>
            <a className="text-decoration-none" href="https://www.cocacoladeargentina.com.ar/"
                target="blank_">
                <img
                    className="d-block w-100 mb-3 w-25"
                    src={`${process.env.PUBLIC_URL}Patrocinadores/publ_coca.png`}
                    alt="Coca-Cola">

                </img>
            </a>
            <a className="text-decoration-none" href="https://www.dell.com.ar/"
                target="blank_">
                <img
                    className="d-block w-100 mb-3 w-25"
                    src={`${process.env.PUBLIC_URL}Patrocinadores/publ_dell.png`}
                    alt="Dell">
                </img>
            </a>
            <a className="text-decoration-none" href="https://www.google.com.ar/"
                target="blank_">
                <img
                    className="d-block w-100 mb-3"
                    src={`${process.env.PUBLIC_URL}Patrocinadores/publ_google.png`}
                    alt="Google">

                </img>
            </a>



        </div>
    );
};

export default Patrocinadores;