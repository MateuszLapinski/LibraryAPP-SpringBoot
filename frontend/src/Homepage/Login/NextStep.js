import React,{ Component } from 'react';
import {Button, Form} from "react-bootstrap";
import './NextStep.css'

class NextStep extends Component {

    handleChangePassword
    render() {
        return(
                <div className="NextStep">
                    <Form>
                        <Form.Group controlId='password' size="lg">
                            <Form.Label>Enter the new password</Form.Label>
                            <Form.Control type="password" name="Password" placeholder="New Password"  ref={this.newpasswordRef}/>

                        </Form.Group>
                        <Form.Group controlId='Confirmpassword' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" name="ConfirmPassword" placeholder="Confirm New Password" ref={this.confirmnewPasswordRef}/>
                        </Form.Group>

                        <Button block="true" size="lg" type="submit" onClick={this.handleChangePassword}>Change Password</Button>
                    </Form>
                </div>
            )
        }
    }

export default NextStep;