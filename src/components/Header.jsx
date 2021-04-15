import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Button, FormControl, NavDropdown, Nav, Form } from 'react-bootstrap';

export default function Header(props) {
    const {countCart} = props; 
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" className="ml-5"><img src={"./assets/image/logo192.png"} alt="" height="25"/> My Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className="mx-auto row w-100">
                    <input type="search" name="" id="" className="col-7 form-control"/>
                    <input type="submit" value="search" className="col-3 btn btn-outline-success"/>
                </Form>
                    <Nav className="ml-auto mr-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link" className="d-flex">Cart <span className="badge my-auto mx-1 badge-pill badge-success small">{countCart}</span></Nav.Link>
                        <NavDropdown title="Prince Raj" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Order</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">My Wishlist</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">My Account</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
