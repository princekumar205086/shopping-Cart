import React, {useState} from 'react';
import Header from './components/Header';
//import Cart from './components/Cart';
//import Sidebars from './components/Sidebars';
//import Wrappers from './components/Wrappers';
import { Tab, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/Product';
//import Data from './components/Data';
// import Footer from './components/Footer';
//import Event from './components/Event';



export default function App() {
  return (
    <div>
      {/* <Event/> */}
      <Header />
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
          <div className="row m-0 p-1">
            <Product  />
          </div>
        </div>
      </div>
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
