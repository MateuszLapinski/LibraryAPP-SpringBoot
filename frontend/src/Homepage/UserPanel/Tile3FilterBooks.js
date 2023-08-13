import React, {Component} from "react";
import './Tile2ReviewBooks.css'
import './Tile3FilterBooks.css'
import {Form} from "react-bootstrap";
class  Tile3FilterBooks extends Component{
    constructor(props) {
        super(props);
        this.userChoiceRef=React.createRef();
        this.state = {
            booksData:[]
        }
    }

    componentDidMount() {
        this.userChoiceRef.current.addEventListener("input", this.handleInput);
    }

    componentWillUnmount() {
        this.userChoiceRef.current.removeEventListener("input", this.handleInput);
    }

    handleInput = (event) => {
        const userInput = event.target.value;
        this.filterBooks(userInput);
    }
    filterBooks(userChoice) {
        fetch(`http://localhost:8080/filterbooks/${userChoice}`, {
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
                <div className="UserFilter">
                <Form>
                    <Form.Group size="lg">
                        <Form.Label></Form.Label>
                        <Form.Control className="HolyInput" autoFocus  placeholder="Type Something" ref={this.userChoiceRef}/>
                    </Form.Group>
                </Form>
                </div>
                <div className="bookList">
                    {this.state.booksData.map((book, index) => (
                        <div key={index} className="bookInfo">
                            <p>Title: {book.title}</p>
                            <p>Author: {book.author}</p>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}export default Tile3FilterBooks;