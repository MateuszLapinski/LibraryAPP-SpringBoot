import React,{ Component } from 'react';
import Registration from "../Registration/Registration";
import {Button, Form} from "react-bootstrap";
import './ForgottenPassword.css'
import NextStep from "./NextStep";
class ForgottenPassword extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.state = {
            showNextStep: false,
            showUsernameError: false
        };
    }
    handleNext= event => {
        event.preventDefault();
        const username = this.usernameRef.current.value;
        this.FindUser(username);

    };

    FindUser(username) {
        fetch(`http://localhost:8080/searchuser/${encodeURIComponent(username)}`, {
            method: 'Get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(function (response) {
            if (response.status === 200) {
                this.setState({showNextStep:true});
            } else if (response.status === 422) {
                console.log("Nieprawidłowy Użytkownik")
                this.setState({showUsernameError:true});
            }else{console.log("dupa");
                this.setState({showUsernameError:false});}
        }.bind(this)).catch(function(error){
            console.log("dupa");
        }.bind(this));
    }
render() {
        if(this.state.showNextStep) {
            return (
                <NextStep></NextStep>
            )
        } return(
        <div className="ForgottenPassword">
            <Form onSubmit={this.handleNext}>
                <Form.Group controlId='username' size="lg">
                    <Form.Label>To change your password, enter the User Name you used to register</Form.Label>
                    <Form.Control ref={this.usernameRef} autoFocus name="username" placeholder="UserName" />
                </Form.Group>
                {this.state.showUsernameError && (
                    <div className="UsernameError">
                        User not found, please try again
                    </div>
                )}
                <Button block="true" size="lg" type="submit" onClick={this.handleNext}>Next</Button>

            </Form>
        </div>
        )
    }
}
export default ForgottenPassword;