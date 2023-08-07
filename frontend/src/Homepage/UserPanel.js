import React,{ Component } from 'react';
import {Overlay} from "react-bootstrap";
import './UserPanel.css'
import Homepage from "./Homepage";

class UserPanel extends Component {
    componentDidMount() {
        const logoContainer = document.querySelector(".logo");
        const homepageContainer= document.querySelector(".Homepage");
        const logoIMG= document.querySelector(".logo img");

        if (logoContainer) {
            logoContainer.style.width = "0";
        }
        if (homepageContainer) {
            homepageContainer.style.width = "100%";
            homepageContainer.style.margin = "auto";
        }
        if (logoIMG) {
            logoIMG.style.width="42px";
            logoIMG.style.height="64px";
            logoIMG.style.top="12%";
            logoIMG.style.left="50%";
        }
    }

    render() {

        return (
            <>
                <div className="Overlay" onLoad={this.toggleLogoClass}>


                </div>
            </>
        );
    }
}

export default UserPanel;