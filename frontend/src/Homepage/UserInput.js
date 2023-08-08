import React,{ Component } from 'react';
import './UserInput.css'

class UserInput extends Component {
    render() {
        return (
            <>
                <div id="userInput">
                    {this.props.showAddingBook && (
                        <div id="addingBook">
                            <span> test1 </span>
                        </div>
                    )}
                    {this.props.showReviewBook && (
                        <div id="reviewBook">
                            <span> test2 </span>
                        </div>
                    )}
                    {this.props.showSearchBook && (
                        <div id="searchBook">
                            <span> test3 </span>
                        </div>
                    )}
                    {this.props.showAIBook && (
                        <div id="AIBook">
                            <span> test4 </span>
                        </div>
                    )}
                    {this.props.showUserData && (
                        <div id="UserDataChange">
                            <span> test5 </span>
                        </div>
                    )}
                    {this.props.showLogOut && (
                        <div id="LogOutInformation">
                            <span> Zostaniesz wylogowany </span>
                        </div>
                    )}

                </div>
            </>
        );
    }
}

export default UserInput;