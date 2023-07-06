import React,{ Component } from 'react';
import Registration from "../Registration/Registration";
import {Button, Form} from "react-bootstrap";
import './Signin.css'

class Signin extends Component {
    render() { return(
        <div className="Signin">
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='username' size="lg">
                    <Form.Label></Form.Label>
                    <Form.Control autoFocus name="username" placeholder="UserName" />
                </Form.Group>

                <Form.Group controlId='password' size="lg">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" name="Password" placeholder="Password"/>
                </Form.Group>

                <Button block="true" size="lg" type="submit">Login</Button>

                <Button block="true" size="lg" type="submit">Załóż konto</Button>

            </Form>
        </div>
    )}}

export default Signin;