import React,{ Component } from 'react';
import Registration from "../Registration/Registration";
import {Button, Form} from "react-bootstrap";
import './Signin.css'

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRegistration: false
        };
    }
    handleLogin = () => {
        // Logika obsługi logowania
    };

    handleRegistration = () => {
        this.setState({ showRegistration: true });
    };

    handleBackToLogin = () => {
        this.setState({ showRegistration: false });
    };

    render() {
        if (this.state.showRegistration) {
            return (
                   <Registration handleBackToLogin={this.handleBackToLogin}/>

        );
        }
        return(
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

                <Button block="true" size="lg" type="submit" onClick={this.handleLogin}>Login</Button>
                <Button block="true" size="lg" type="submit" onClick={this.handleRegistration}>Załóż konto</Button>

            </Form>
            <div className="BackToLogin">
                Nie pamiętasz hasła?
            </div>


        </div>
    )}}

export default Signin;