import React from 'react';
import Col from 'react-bootstrap/Col'


const CardCategoria = () => {
    return (
        <Col md={5} className="p-3 mx-1 my-3 shadow border rounded">
            <h4>Categoria 1</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, fermentum faucibus eleifend venenatis fusce dignissim himenaeos, imperdiet scelerisque rutrum nam nullam sagittis. Semper hac nisl sem ridiculus odio litora ut massa, proin feugiat suscipit duis facilisis risus.</p>
            <hr></hr>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, fermentum faucibus eleifend venenatis fusce dignissim himenaeos, imperdiet scelerisque rutrum nam nullam sagittis. Semper hac nisl sem ridiculus odio litora ut massa, proin feugiat suscipit duis facilisis risus.</p>
            <hr></hr>
        </Col>

    );
};

export default CardCategoria;