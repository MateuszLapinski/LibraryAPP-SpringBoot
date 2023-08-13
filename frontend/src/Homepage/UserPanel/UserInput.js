import React,{ Component } from 'react';
import './UserInput.css'
import Tile1AddBook from "./Tile1AddBook";
import Tile2ReviewBooks from "./Tile2ReviewBooks";
import Tile3FilterBooks from "./Tile3FilterBooks";
import Tile4ChangeUserDetails from "./Tile4ChangeUserDetails";

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
                        <Tile1AddBook username={this.props.username}/>
                    )}
                    {this.props.showReviewBook && (
                        <Tile2ReviewBooks username={this.props.username}/>
                    )}
                    {this.props.showSearchBook && (
                       <Tile3FilterBooks/>
                    )}
                    {this.props.showAIBook && (
                        <div id="AIBook">
                            <span> test4 </span>
                        </div>
                    )}
                    {this.props.showUserData && (
                        <Tile4ChangeUserDetails/>
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