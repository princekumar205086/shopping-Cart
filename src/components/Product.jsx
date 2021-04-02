import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Data from './Data';
import Cart from './Cart';
export default function Product() {
    const [cartItems, setCartItems] = useState([Data]);
    const onAdd = (product) => {
        setCartItems([...cartItems, { product, qty: 1 }]);
        console.log(cartItems)
        // const exist = cartItems.find((x) => x.id == product.id);
        // console.log(exist);
        // if (exist) {
        //     setCartItems(cartItems.map((x) => x.id == product.id ? { ...exist, qty: exist.qty + 1 } : x));
        // } else {
        //     setCartItems([...cartItems, { ...product, qty: 1 }]);
        // }
    };
    return (
        <React.Fragment>
            <div className="row">
                {Data.map(product => (
                    <div className="col-lg-2 p-1 text-center" key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: '200px', width: '100%', border: 'solid grey 1px' }} />
                            <Card.Body>
                                <Card.Title className="small">{product.name}</Card.Title>
                                <Card.Text className="small">Rs. {product.price}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="p-1">
                                <Button variant="primary" onClick={onAdd} className="btn-sm btn-block">Add to cart</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
            {/* just to check wheater cartItems array work or not */}
            <Cart cartItems={cartItems} onAdd={onAdd} />
            {cartItems.map(items => (
                <div key={items.id}>
                    {console.log(items.name)}
                    <p >{items.name}</p>
                </div>
            ))}
        </React.Fragment>
    )

}
