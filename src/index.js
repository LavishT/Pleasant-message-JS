import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting'
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { Jumbotron } from 'react-bootstrap'

ReactDOM.render( 
    <Container>
       <App />
    </Container>,
    document.getElementById('root')
);