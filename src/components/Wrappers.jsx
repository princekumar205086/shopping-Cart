import React from 'react';
import { Tab, ListGroup, Col, Row } from 'react-bootstrap';
import Sonnets from "./Sonnets.jsx";
import Product from './Product';

export default function Wrappers() {
    return (
        <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="#link1">
                    <Product/>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                    <Sonnets />
                </Tab.Pane>
            </Tab.Content>
        </Col>
    )
}
