import React,{useState} from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

const Greeting = ( props ) => {
    const { name } = props
    return (
        <div>
            <Jumbotron style={{ marginTop:'10px', backgroundColor: '#fd79a8'}}>
            <h1> Hello {name}, I hope you have a pleasant day :) ...</h1>
            </Jumbotron>
        </div>
    );
    }
    
export default Greeting;
