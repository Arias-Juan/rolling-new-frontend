import React from 'react';
import CardCategoria from './CardCategoria';

const NoticiasCategorias = () => {
    return (
        <div className="shadow border rounded p-3 mb-3">
            <div className="row">
                <CardCategoria></CardCategoria>
                <CardCategoria></CardCategoria>
                <CardCategoria></CardCategoria>
                <CardCategoria></CardCategoria>
            </div>
        </div>
    );
};

export default NoticiasCategorias;