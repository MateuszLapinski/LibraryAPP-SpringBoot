import {Component} from "react";
import Registration from "./Registration/Registration";
import Signin from "./Login/Signin";
import "./Login/Signin.css"
import About from "../About/About";
import "./HomePage.css"
import owllogo from "./owllogo.png"


class Homepage extends Component {
    render(){
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