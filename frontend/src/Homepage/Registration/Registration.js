import React,{ Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import './Registration.css'
import RegistrationAlert from "./RegistrationAlert.js";

class Registration extends Component{
    constructor(props) {
        super(props);
        this.registrationAlert=React.createRef();
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.confirmPasswordRef = React.createRef();
        this.state = {
            showRegisterError: false,
            showUsernameError: false,
            showPasswordError:false,
            showRegisterSuccess:false,
            counter: 6
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
    handleSubmit= event => {
        event.preventDefault();
        const username = this.usernameRef.current.value;
        const password = this.passwordRef.current.value;
        const confirmPassword = this.confirmPasswordRef.current.value;

        if (!username || !password || !confirmPassword) {
            console.log('Please fill in all the fields.');
            this.setState({ showRegisterError: true });
            return;
        }else {
            this.setState(({ showRegisterError: false }))
        }

        if(password !== confirmPassword) {
            this.setState({showPasswordError:true});
            return;
        }else {
            this.setState({showPasswordError:false})
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
                this.showRegistrationAlert("alert-success","User Registred!", "You can now log in using your credentials");
                this.setState({ showRegisterSuccess: true }, () => {
                    this.counter();
                });
                setTimeout(() => {
                    this.props.handleBackToLogin();
                },5000);

            } else if (response.status === 422) {
                this.setState({showUsernameError:true});
                console.log(this.registrationAlert)
                this.showRegistrationAlert("alert-danger","User non registered!", "Something went wrong.");
            }else{this.showRegistrationAlert("alert-danger","User non registered!", "Something went wrong.");
                this.setState({showUsernameError:false});}
        }.bind(this)).catch(function(error){
            this.showRegistrationAlert("alert-danger","Error!", "Something went wrong");
        }.bind(this));
    }


    render() {
        return (
            <>
                <div className="Register">
                    {this.state.showRegisterError && (
                        <div className="RegisterError">
                            <span>Wypełnij wszystkie pola formularza</span>
                        </div>
                    )}
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId='username' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control autoFocus name="username" placeholder="UserName" ref={this.usernameRef} />
                            {this.state.showUsernameError && (
                            <div className="UsernameError">
                                <span>Podany login jest już zajęty. Spróbuj inny login.</span>
                            </div>
                            )}
                        </Form.Group>

                        <Form.Group controlId='password' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" name="Password" placeholder="Password"  ref={this.passwordRef}/>

                        </Form.Group>
                        <Form.Group controlId='Confirmpassword' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" name="ConfirmPassword" placeholder="Confirm Password" ref={this.confirmPasswordRef}/>
                            {this.state.showPasswordError && (
                                <div className="PasswordError">
                                    <span>Podane hasła nie pasują do siebie. Sprawdź czy hasła są jednakowe.</span>
                                </div>
                            )}
                            {this.state.showRegisterSuccess && (
                                <div className="PasswordError">
                                    <span>Rejestracja przebiegła pomyślnie, Zostaniesz przeniesiony do ekranu logowania za {this.state.counter}</span>
                                </div>
                            )}

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