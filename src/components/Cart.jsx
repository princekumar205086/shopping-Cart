import React from 'react';

export default function Cart(props) {
    const { cartItems, onAdd } = props;
    const Price = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const Tax = Price * 0.18;
    const Shipping = Price > 500 ? 0 : 40;
    const Total = Price + Tax + Shipping;
    return (
        <React.Fragment>
            <div className="row">
                <h5 className="text-center my-auto mx-auto">Cart Items</h5>
            </div>
            <div className="mt-1">
                {cartItems.length === 0 && <div> Cart is empty!</div>}
            </div>
            {cartItems.map((items) => (
                <div className="row mt-1" key={items.id}>
                    <div className="col-sm-1 small"><img src={items.image} alt={items.name} style={{height:'25px', width:'25px'}}/></div>
                    <div className="col-sm-4 small">{items.name}</div>
                    <div className="col-sm-2">
                        <div className="btn-group rounded small m-0 p-0">
                            <button onClick={() => props.onAdd(items)} className="btn btn-sm btn-primary">+</button>
                            <button onClick={() => props.onRemove(items)} className="btn btn-sm btn-warning ml-1">-</button>
                        </div>
                    </div>
                    <div className="col-lg-5 small">
                        {items.qty} x Rs. {items.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length != 0 &&
                <React.Fragment>
                    <hr className="border border-dark " />
                    <p className="m-0 p-0">Order summary</p>
                    <div className="row m-0 p-0">
                        <div className="col-lg-6 m-0 p-0 small">
                            <p>Price</p>
                            <p>GST</p>
                            <p>Shipping</p>
                            <hr className="border border-secondary" />
                            <p><strong>Total</strong></p>
                        </div>
                        <div className="col-lg-6 m-0 p-0 small right">
                            <p>Rs. {Price.toFixed(2)}</p>
                            <p>Rs. {Tax.toFixed(2)}</p>
                            <p>Rs. {Shipping.toFixed(2)}</p>
                            <hr className="border border-secondary" />
                            <p><strong>Rs. {Total.toFixed(2)}</strong></p>
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}
