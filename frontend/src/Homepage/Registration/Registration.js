import React,{ Component } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import './Registration.css'
import RegistrationAlert from "./RegistrationAlert";

class Registration extends Component{
    constructor(props) {
        super(props);
        this.registrationAlert=React.createRef();
    }
    handleSubmit= event => {
        event.preventDefault();
        const {password, ConfirmPassword} =event.target;
        if(password.value !== ConfirmPassword.value) {
            console.log("Password do not match");
            return;

        }

        this.registerUser(event.target.username.value,event.target.password.value);
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
                this.showRegistrationAlert("Danger","User already existed!", "Please choose a diffrent name.");
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
                            <Form.Control autoFocus name="username" placeholder="UserName" />
                        </Form.Group>

                        <Form.Group controlId='password' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" name="Password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId='Confirmpassword' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" name="ConfirmPassword" placeholder="Confirm Password"/>
                        </Form.Group>


                        <Button block="true" size="lg" type="submit">Register</Button>
                    </Form>
                </div>
                <RegistrationAlert ref={this.registrationAlert}/>
            </>
        )

    }
}

export default Registration;