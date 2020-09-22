import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarAdmin from '../../administracion/common/NavbarAdmin';

const PrincipalAdmin = () => {
    return (
        <div>
            <NavbarAdmin></NavbarAdmin>
            <Container className='text-center'>
                <div className="m-5 p-5">
                    <h1 className="d-none d-sm-block">Bienvenido al ADMIN</h1>
                    <h3 className="d-block d-sm-none">Bienvenido al ADMIN</h3>

                </div>
            </Container>
        </div>
    );
};

export default PrincipalAdmin;