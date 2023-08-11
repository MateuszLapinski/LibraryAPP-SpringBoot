import React,{ Component } from 'react';
import Registration from "../Registration/Registration";
import {Button, Form} from "react-bootstrap";
import ForgottenPassword from "./ForgottenPassword";
import './Signin.css'
import UserPanel from "../UserPanel/UserPanel";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.state = {
            showRegistration: false,
            showForgotten:false,
            showUserError:false,
            showPasswordError:false,
            showUserPanel:false,
            showIncompleteError:false
        };
    }
    handleLogin = event => {
        if (this.state.showUserError===true || this.state.showPasswordError===true || this.state.showIncompleteError===true)
        {
            this.setState({showUserError:false})
            this.setState({showPasswordError:false})
            this.setState({showIncompleteError:false})
        }
        event.preventDefault();
        const username = this.usernameRef.current.value;
        const password = this.passwordRef.current.value;
        if (!username || !password) {
            console.log('Please fill in all the fields.');
            this.setState({ showIncompleteError: true });
            return;
        } else {
            this.setState(({ showIncompleteError: false }))
        }
        this.signIn(username, password);
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

    signIn(username, password) {
        fetch(`http://localhost:8080/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then(response => {
            if(response.status===404) {
                console.log("Nie znaleziono takiego użytkownika")
                this.setState({showUserError:true})
            }
            else if (response.ok) {
                console.log("User has logged");


                this.setState({showUserPanel:true, username:username})

            } else {
                console.log("wrooooong");
                this.setState({showPasswordError:true})
            }
        }).catch(error => {
            console.log("Coś poszło nie tak");
        });

    }

    render() {
        const{showUserPanel, username}=this.state;
        if (showUserPanel) {
            return (
                <UserPanel username={username}/>
            )
        }
        if (this.state.showRegistration===true) {
            return (
                   <Registration handleBackToLogin={this.handleBackToLogin}/>

        );
        }else if (this.state.showForgotten===true){
            return(
                <ForgottenPassword handleBackToLogin={this.handleBackToLogin}/>
            )
        }else {
        return(
        <div className="Signin">
            <Form onSubmit={this.handleLogin}>
                <Form.Group controlId='username' size="lg">
                    <Form.Label></Form.Label>
                    <Form.Control autoFocus name="username" placeholder="UserName" ref={this.usernameRef}/>
                    {this.state.showUserError && (
                        <div className="PasswordError">
                            <span>User not found</span>
                        </div>
                    )}
                </Form.Group>


                <Form.Group controlId='password' size="lg">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" name="Password" placeholder="Password" ref={this.passwordRef}/>
                    {this.state.showPasswordError && (
                        <div className="PasswordError">
                            <span>Wrong Password</span>
                        </div>
                    )}
                    {this.state.showIncompleteError && (
                        <div className="PasswordError">
                            <span>Please fill in all the fields.</span>
                        </div>
                    )}
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
}

export default Signin;