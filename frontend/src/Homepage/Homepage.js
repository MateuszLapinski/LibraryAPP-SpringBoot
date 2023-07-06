import {Component} from "react";
import Registration from "./Registration/Registration";
import Signin from "./Login/Signin";
import "./Login/Signin.css"
import About from "../About/About";
import "./HomePage.css"
import owllogo from "./owllogo.png"


class Homepage extends Component {
constructor(props) {
    super(props);
    this.state = {
        showRegistration: false,
        showSignin: false,
    };
}

handleRegistrationButtonClick = () => {
    this.setState({ showRegistration: true, showSignin: false });
};

handleSigninButtonClick = () => {
    this.setState({ showRegistration: false, showSignin: true });
};
    render(){

            const { showRegistration, showSignin } = this.state;

            return (
                <>
                <div className="logo">
                    <img src={owllogo} alt="Logo"/>
                </div>
                <div className="Homepage">
                    <Signin></Signin>
                </div>
                </>
            );
        }
}


export default Homepage;