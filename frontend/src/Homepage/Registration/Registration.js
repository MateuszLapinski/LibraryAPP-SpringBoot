import React,{ Component } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import './Registration.css'
import RegistrationAlert from "./RegistrationAlert";

class Registration extends Component{
    constructor(props) {
        super(props);
        this.registrationAlert=React.createRef();
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.confirmPasswordRef = React.createRef();
    }
    handleSubmit= event => {
        event.preventDefault();
        const username = this.usernameRef.current.value;
        const password = this.passwordRef.current.value;
        const confirmPassword = this.confirmPasswordRef.current.value;

        if (!username || !password || !confirmPassword) {
            console.log('Please fill in all the fields.');
            return;
        }

        if(password !== confirmPassword) {
            console.log("Password do not match");
            return;
        }

        this.registerUser(username, password);
    }
    showRegistrationAlert(variant, heading, message){
        this.registrationAlert.current.setVariant(variant);
        this.registrationAlert.current.setHeading(heading);
        this.registrationAlert.current.setMessege(message);
        this.registrationAlert.current.setVisible(true);
    }

    registerUser(username, password) {
        fetch('http://localhost:8080/signup', {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then(function (response) {
            if (response.status === 200) {
                this.showRegistrationAlert("Success","User Registred!", "You can now log in using your credentials");
            } else if (response.status === 422) {
                this.showRegistrationAlert("Danger","User already existed!", "Please choose a different name.");
            }else{this.showRegistrationAlert("Danger","User non registered!", "Something went wrong.");}
        }.bind(this)).catch(function(error){
            this.showRegistrationAlert("Danger","Error!", "Something went wrong");
        }.bind(this));
    }


    render() {
        return (
            <>
                <div className="Register">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId='username' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control autoFocus name="username" placeholder="UserName" ref={this.usernameRef} />
                        </Form.Group>

                        <Form.Group controlId='password' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" name="Password" placeholder="Password"  ref={this.passwordRef}/>
                        </Form.Group>
                        <Form.Group controlId='Confirmpassword' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" name="ConfirmPassword" placeholder="Confirm Password" ref={this.confirmPasswordRef}/>
                        </Form.Group>


                        <Button block="true" size="lg" type="submit">Register</Button>

                    </Form>
                    <div className="BackToLogin" onClick={this.props.handleBackToLogin}>
                        Powróć do logowania
                    </div>
                </div>
                <RegistrationAlert ref={this.registrationAlert}/>
            </>
        )

    }
}

export default Registration;