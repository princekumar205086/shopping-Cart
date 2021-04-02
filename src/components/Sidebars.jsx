import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab, ListGroup, Col, Row } from 'react-bootstrap';


export default function Sidebars() {
    return (
        <Col sm={3}>
            <ListGroup className="small">
                <h6 className="listgroup list-group-item list-group-item-action bg-secondary text-white shadow-sm">Products Catalogue</h6>
                <ListGroup.Item action href="#link1">
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                    Link 2
                </ListGroup.Item>
            </ListGroup>
        </Col>
    )
}
