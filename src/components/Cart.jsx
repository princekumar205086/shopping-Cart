import React from 'react'

export default function Cart(props) {
    const {cartItems, onAdd} = props;
    return (
        <div>
            <div className="row">
                <div className="col-lg-8">
                    <h6>Cart Item</h6>
                    <div>
                        {cartItems.length === 0 && <div> Cart is empty!</div>}
                    </div>
                    {cartItems.map((items) => (
                        <div className="row" key={items.id}>
                            <div className="col-sm-2">{items.name}</div>
                            <div className="col-sm-2 inline-block">
                                <button onClick={() => props.onAdd(items)} className="btn btn-sm btn-primary">+</button>
                                <button onClick={() => props.onRemove(items)} className="btn btn-sm btn-warning">-</button>
                            </div>
                            <div className="col-sm-2">
                                {items.qty} x Rs. {items.price}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}
