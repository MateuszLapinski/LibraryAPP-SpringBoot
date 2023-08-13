import React,{ Component } from 'react';
import './Tile2ReviewBooks.css'


class Tile2ReviewBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booksData:[]
        }
    }

    componentDidMount() {
        this.displayBooks(this.props.username)
    }


    displayBooks(username) {
        fetch(`http://localhost:8080/yourbooks/${username}`, {
            method: 'GET',
        }).then(function (response) {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log('Something went wrong');
                return [];
            }
        }).then(function (data) {
            this.setState({ booksData: data });
        }.bind(this)).catch(function (error) {
            console.log("Something went wrong");
        }.bind(this));
    }
    render() {
        return (
            <>
                <div className="bookList">
                    {this.state.booksData.map((book, index) => (
                        <div key={index} className="bookInfo">
                            <p>Title: {book.title}</p>
                            <p>Author: {book.author}</p>
                            <p>Is Read: {book.isREAD}</p>
                        </div>
                    ))}
                </div>
            </>

        )
    }

}export default Tile2ReviewBooks;