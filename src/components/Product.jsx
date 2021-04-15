import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Data from './Data';
export default function Product(props) {
    const {onAdd} = props;
    return (
        <React.Fragment>
            <div className="row">
                {Data.map(product => (
                    <div className="col-lg-3 p-1 text-center" key={product.id}>
                        <Card className="m-0 p-0">
                            <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: '180px', width: '100%', border: 'solid grey 1px' }} />
                            <Card.Body className="m-0 p-1">
                                <Card.Title className="small my-auto">{product.name}</Card.Title>
                                <Card.Text className="small my-auto">Rs. <del style={{color:'red'}}>1025</del></Card.Text>
                                <Card.Text className="small my-auto">Rs. {product.price}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="p-1">
                                <Button variant="primary" onClick={()=>onAdd(product)} className="btn btn-sm btn-block">Add to cart</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )

}
