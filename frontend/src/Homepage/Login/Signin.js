import React,{ Component } from 'react';
import Registration from "../Registration/Registration";
import {Button, Form} from "react-bootstrap";
import ForgottenPassword from "./ForgottenPassword";
import './Signin.css'
import UserPanel from "../UserPanel";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRegistration: false,
            showForgotten:false,
            showUserPanel:false
        };
    }
    handleLogin = () => {
        this.setState({showUserPanel:true})
    };

    handleRegistration = () => {
        this.setState({ showRegistration: true });
    };

    handleBackToLogin = () => {
        this.setState({ showRegistration: false });
    };

    handleForgotten = () => {
        this.setState({showForgotten:true});
    }

    render() {
        if (this.state.showUserPanel) {
            return (
                <UserPanel handleBackToLogin={this.handleBackToLogin}/>

            );
        }
        if (this.state.showRegistration) {
            return (
                   <Registration handleBackToLogin={this.handleBackToLogin}/>

        );
        }else if (this.state.showForgotten){
            return(
                <ForgottenPassword handleBackToLogin={this.handleBackToLogin}/>
            )
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

                <Button block="true" size="lg" type="submit" onClick={this.handleLogin}>Sign in</Button>
                <Button block="true" size="lg" type="submit" onClick={this.handleRegistration}>Create an account
                </Button>

            </Form>
            <div className="BackToLogin" onClick={this.handleForgotten}>
                Forgot Password?
            </div>


        </div>
    )}}

export default Signin;