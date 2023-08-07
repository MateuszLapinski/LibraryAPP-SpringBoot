import React,{ Component } from 'react';
import {Button, Form} from "react-bootstrap";
import './NextStep.css'
import Registration from "../Registration/Registration";
import Signin from "./Signin";



class NextStep extends Component {


    constructor(props) {
        super(props);
        this.newPasswordRef = React.createRef();
        this.confirmNewPasswordRef = React.createRef();

        this.state = {
            showTheSamePasswords: false,
            showOldPasswordError:false,
            showLogin:false,
            showRegisterSuccess: false,
            counter:6
        };
    }
    counter = () => {
        if (this.state.counter > 1) {
            this.setState((prevState) => ({ counter: prevState.counter - 1 }));
            setTimeout(this.counter, 1000);
        } else {
            this.setState({ counter: 5, showRegisterSuccess: false });
        }
    };
    handleBackToLogin = () => {
        this.setState({showLogin:true});
    }

    handleChangePassword = event => {
        event.preventDefault();
        const newPassword = this.newPasswordRef.current.value;
        const confirmNewPassword = this.confirmNewPasswordRef.current.value;

        if (newPassword === confirmNewPassword) {
            this.changePassword(newPassword);
            this.counter();
            this.setState({showRegisterSuccess:true})
            setTimeout(() => {
                this.setState({ showLogin: true });
            },5000);
        } else {
            console.log("Hasła nie są identyczne");
            this.setState({showTheSamePasswords:true});
        }
        if (this.state.showOldPasswordError===true){
            this.setState({showOldPasswordError:false})
        }
    };

    changePassword(newPassword) {
        const { username } = this.props;
        fetch(`http://localhost:8080/changepassword`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: newPassword,
            })
        }).then(response => {
            if (response.ok) {
                console.log("Hasło zostało pomyślnie zmienione");
            } else {
                console.log("Hasło nie zostało zmienione, jest identyczne jak stare hasło");
                this.setState({showOldPasswordError:true});
            }
        }).catch(error => {
            console.log("Coś poszło nie tak");
        });
    }



    render() {
        if (this.state.showLogin) {
            return (
                <Signin handleBackToLogin={this.handleBackToLogin} />
            );
        } return (

            <div className="NextStep">
                <Form>
                    <Form.Group controlId='password' size="lg">
                        <Form.Label>Enter the new password</Form.Label>
                        <Form.Control type="password" name="Password" placeholder="New Password" ref={this.newPasswordRef} />
                    </Form.Group>
                    <Form.Group controlId='ConfirmPassword' size="lg">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control type="password" name="ConfirmPassword" placeholder="Confirm New Password" ref={this.confirmNewPasswordRef} />
                    </Form.Group>
                    {this.state.showTheSamePasswordsError && (
                        <div className="UsernameError">
                            Passwords are not identical. Try again.
                        </div>
                    )}
                    {this.state.showOldPasswordError && (
                        <div className="UsernameError">
                            The password has not been changed, it is the same as the old password
                        </div>
                    )}
                    {this.state.showRegisterSuccess && (
                        <div className="PasswordError">
                            <span>Changing password was successful, You will be taken to the login screen in {this.state.counter} second </span>
                        </div>
                    )}
                    <Button block={true} size="lg" type="submit" onClick={this.handleChangePassword}>
                        Change Password
                    </Button>
                </Form>
            </div>
        );
    }
}

export default NextStep;