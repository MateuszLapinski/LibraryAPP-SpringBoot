import React, {Component} from "react";
import {Form} from "react-bootstrap";
import './Tile4ChangeUserDetails.css'

class Tile4ChangeUserDetails extends Component{

    render() {
        return(
            <>
                <div className="changeDetails">
            <div id="ChangePassword" className="tiles" >
                <span>Change Password </span>
            </div>
                <div id="ChangeAvatar" className="tiles" >
                    <span>Change Avatar </span>
                </div>
                </div>
            </>
        )
    }
}export default Tile4ChangeUserDetails;