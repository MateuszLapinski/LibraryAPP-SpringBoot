import React,{ Component } from 'react';
import './UserPanel.css'
import witcher from "../witcher.jpg"
import UserInput from "./UserInput";
import Signin from "../Login/Signin";

class UserPanel extends Component {
    state = {
        showAddingBook: false,
        showReviewBook: false,
        showSearchBook: false,
        showAIBook: false,
        showUserData: false,
        showLogOut: false,
        showLogin: false,
        isLoggedIn: true
    //
    };

    handleBackToLoginFirstStep = () => {
        this.setState({showLogin: true});
    }


    handleBackToLoginSecondStep = () => {
        this.handleTile6Click();
        this.handleBackToLoginFirstStep();
        this.NormalPosition();


    }

    handleTile1Click = () => {
        this.setState({
            showLogOut: false,
            showUserData: false,
            showAIBook: false,
            showSearchBook: false,
            showReviewBook: false,
            showAddingBook: true
        });
    };
    handleTile2Click = () => {
        this.setState({
            showLogOut: false,
            showUserData: false,
            showAIBook: false,
            showSearchBook: false,
            showReviewBook: true,
            showAddingBook: false
        });
    };
    handleTile3Click = () => {
        this.setState({
            showLogOut: false,
            showUserData: false,
            showAIBook: false,
            showSearchBook: true,
            showReviewBook: false,
            showAddingBook: false
        });
    };
    handleTile4Click = () => {
        this.setState({
            showLogOut: false,
            showUserData: false,
            showAIBook: true,
            showSearchBook: false,
            showReviewBook: false,
            showAddingBook: false
        });
    };
    handleTile5Click = () => {
        this.setState({
            showLogOut: false,
            showUserData: true,
            showAIBook: false,
            showSearchBook: false,
            showReviewBook: false,
            showAddingBook: false
        });
    };
    handleTile6Click = () => {
        this.setState({
            showLogOut: true,
            showUserData: false,
            showAIBook: false,
            showSearchBook: false,
            showReviewBook: false,
            showAddingBook: false
        });

    };

    UserPanelPosition() {
        const logoContainer = document.querySelector(".logo");
        const homepageContainer = document.querySelector(".Homepage");
        const logoIMG = document.querySelector(".logo img");

        if (logoContainer) {
            logoContainer.style.width = "0";
            logoIMG.style.display="block";
        }
        if (homepageContainer) {
            homepageContainer.style.maxWidth = "100%";
            homepageContainer.style.margin = "auto";
            homepageContainer.style.width="100%";

        }
        if (logoIMG) {
            logoIMG.style.width = "42px";
            logoIMG.style.height = "64px";
            logoIMG.style.top = "12%";
            logoIMG.style.left = "50%";
            logoIMG.style.position="absolute";

        }
    }

    NormalPosition() {
        const logoContainer = document.querySelector(".logo");
        const homepageContainer = document.querySelector(".Homepage");
        const logoIMG = document.querySelector(".logo img");

        if (logoContainer) {
            logoContainer.style.width = "40%";
        }
        if (homepageContainer) {
            homepageContainer.style.width = "60%";
            homepageContainer.style.margin = "auto";
        }
        if (logoIMG) {
            logoIMG.style.width = "210px";
            logoIMG.style.height = "320px";
            logoIMG.style.top = "20%";
            logoIMG.style.left = "10%";
        }
    }

    render() {
        const {username}=this.props;
        if (this.state.showLogin===true) {
           return <Signin handleBackToLogin={this.handleBackToLogin}/>
        }
            return (
                <>
                    <div className="Overlay" onLoad={this.UserPanelPosition}>
                        <div className="Container1">
                            <div className="UserInfo">
                                <div className="UserPhoto">
                                    <img src={witcher}/>
                                </div>
                                <div className="UserData">
                                    <span id="login"> {username} </span>
                                </div>
                            </div>
                        </div>
                        <div className="Container2">
                            <div id="tile1" className="tiles" onClick={this.handleTile1Click}>
                                <span>Add a book</span>
                            </div>
                            <div id="tile2" className="tiles" onClick={this.handleTile2Click}>
                                <span>Review your book </span>
                            </div>

                            <div id="tile3" className="tiles" onClick={this.handleTile3Click}>
                                <span>Search for a book in the database</span>
                            </div>

                            <div id="tile4" className="tiles" onClick={this.handleTile4Click}>
                                <span>Ask AI for recommended books</span>
                            </div>

                            <div id="tile5" className="tiles" onClick={this.handleTile5Click}>
                                <span>Change user details </span>
                            </div>

                            <div id="tile6  " className="tiles" onClick={this.handleBackToLoginSecondStep}>
                                <span>Log out</span>
                            </div>
                        </div>
                        <UserInput showAddingBook={this.state.showAddingBook} showReviewBook={this.state.showReviewBook}
                                   showSearchBook={this.state.showSearchBook}
                                   showAIBook={this.state.showAIBook} showUserData={this.state.showUserData} showLogOut={this.state.showLogOut} username={username}/>
                    </div>
                </>
            );
        }
    }

export default UserPanel;