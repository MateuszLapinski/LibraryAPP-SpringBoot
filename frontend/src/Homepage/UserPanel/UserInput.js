import React,{ Component } from 'react';
import './UserInput.css'
import Tile1AddBook from "./Tile1AddBook";
import Tile2ReviewBooks from "./Tile2ReviewBooks";

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAllBooks: false
        };
    }

    handleShowAllBooks = () => {
        this.setState({ showAllBooks: true });
    };
    render() {
        return (
            <>
                <div id="userInput">
                    {this.props.showAddingBook && (
                        <Tile1AddBook/>
                    )}
                    {this.props.showReviewBook && (
                        <Tile2ReviewBooks />
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