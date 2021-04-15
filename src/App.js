import React, { useState } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
//import Sidebars from './components/Sidebars';
//import Wrappers from './components/Wrappers';
//import { Tab, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/Product';
// import Footer from './components/Footer';
//import Event from './components/Event';



export default function App() {
  // hooks for cartitem
  const [cartItems, setCartItems] = useState([]);
  // add to cart button function or increase quantity
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    console.log(exist);
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  // remove cart item or decrease quantity
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
    else {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  }
  return (
    <div>
      {/* <Event/> */}
      <Header countCart={cartItems.length} />
      <div className="row m-0 p-0">
        <div className="col-lg-2">

          <div className="list group rounded mt-2">
            <a className="list-group-item list-group-item-action active rounded">Shop by category</a>
            <a href="" className="list-group-item list-group-item-action">Electronics</a>
            <a href="" className="list-group-item list-group-item-action">Home and sanitary</a>
            <a href="" className="list-group-item list-group-item-action">Hardware</a>
            <a href="" className="list-group-item list-group-item-action">Clothing</a>
            <a href="" className="list-group-item list-group-item-action">Books</a>
          </div>
        </div>
        <div className="col-lg-10">

          <div className="row">
            <div className="col-md-8">
              <Product onAdd={onAdd} />
            </div>
            <div className="col-md-4">
              <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            </div>
          </div>
        </div>
      </div>
      {/* Tab based filter will later be add */}
      {/* <div className="row m-0 p-0">
        <div className="p-3">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Sidebars />
              <Wrappers />
            </Row>
          </Tab.Container>
        </div>
      </div> */}
      {/* <Footer/> */}
    </div>
  );
}
