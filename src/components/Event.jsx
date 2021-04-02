import React from 'react';
import {Button} from 'react-bootstrap';

export default function Event() {
    function press(e){
        e.preventDefault();
        alert("Alert event has been fired. Just now!");
    }
    return (
        <div>
            <Button onClick={press}  className="btn btn-primary my-auto">Click Me</Button>
        </div>
    )
}
