import './App.css';
import React,{ Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Registration.css'
import RegistrationAlert from "./RegistrationAlert";

class Registration extends Component{
    handleSubmit= event => {
        event.preventDefault();

        this.registerUser(event.target.username.value,event.target.password.value);
    }

    registerUser(username, password) {
        fetch('http://localhost:8080/signup', {
            method:'Post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                username:username,
                password:password,
            })
        }).then(function (response){
            if(repsponse.status===200){
                console.log("User Registred!");
            }
        })
}
    render() {
        return (
            <>
                <div className="Register">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId='username' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control autoFocus name="username" placeholder="UserName" />
                        </Form.Group>

                        <Form.Group controlId='password' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" name="Password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId='Confirmpassword' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" name="Password" placeholder="Confirm Password"/>
                        </Form.Group>


                        <Button block size="lg" type="submit">Register</Button>
                    </Form>
                </div>
            </>
        )

    }
}

export default Registration;