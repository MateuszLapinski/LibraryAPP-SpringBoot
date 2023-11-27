import {Component} from "react";
import Signin from "./Login/Signin";
import "./Login/Signin.css"
import "./HomePage.css"


class Homepage extends Component {

    render(){
            return (
                <div>
                    <div>Your Library APP</div>
                <div className="Container">
                    <div className="innerContainer">
                        <div className="leftside">
                            <img src="vectorlibrary.webp"/>
                        </div>
                    </div>
                    <div className="innerContainer">
                        <Signin></Signin>
                    </div>
                </div>
                </div>
            );
        }
}


export default Homepage;