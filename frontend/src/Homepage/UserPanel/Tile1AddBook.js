import React,{ Component } from 'react';
import {Button, Form} from "react-bootstrap";
import './Tile1AddBook.css'
class Tile1AddBook extends Component {
    constructor(props) {
        super(props);
        this.titleRef=React.createRef();
        this.authorRef=React.createRef();
        this.isReadRef=React.createRef();
        this.state ={
            showIncompleteError:false,
            showBookAdded:false
        };
    }

    handleSubmit= event => {
        event.preventDefault();
        const username= this.props.username;
        const title = this.titleRef.current.value;
        const author = this.authorRef.current.value;
        const read= this.isReadRef.current.value;
        if (!title || !author || !read) {
            console.log('Please fill in all the fields.');
            this.setState({ showIncompleteError : true });
            return;
        }else {
           this.addBook(title,author,read, username);
            this.titleRef.current.value = '';
            this.authorRef.current.value = '';
            this.isReadRef.current.value = '';
            this.setState({showBookAdded:true});
        }
        if(this.state.showIncompleteError ===true || this.state.showBookAdded ===true) {
            this.setState({showEmptyInputError:false});
            this.setState({showBookAdded:false});
        }
    }

    addBook(title, author, read, username) {
        fetch(`http://localhost:8080/addbooks/${username}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                author: author,
                isREAD: read
            })
        }).then(function (response) {
            if (response.ok) {
                console.log('Książka została dodana');
            } else {
                console.log('Wystąpił błąd podczas dodawania książki');
            }
        }).catch(function (error) {
            console.log('Wystąpił błąd podczas dodawania książki:', error);
        });
    }
    render(){
        return(
            <>
                <div className="addingBook">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId='BookTitle' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control className="HolyInput" autoFocus name="BookTitle" placeholder="Book Title" ref={this.titleRef}/>
                        </Form.Group>

                        <Form.Group controlId='Author' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control className="HolyInput" name="Author" placeholder="Author" ref={this.authorRef}/>
                        </Form.Group>

                        <Form.Group controlId='read' size="lg">
                            <Form.Label></Form.Label>
                            <Form.Control className="HolyInput" name="Read" placeholder="Has it been read?" ref={this.isReadRef}/>
                        </Form.Group>
                        {this.state.showIncompleteError && (
                            <div className="PasswordError">
                                <span>Please fill in all the fields.</span>
                            </div>
                        )}

                        <Button block="true" size="lg" type="submit">Add Book</Button>

                    </Form>
                </div>

                {this.state.showBookAdded && (
                    <div className="PasswordError">
                        <span>The Book has been added</span>
                    </div>
                )}
            </>
        )
    }
}
export default Tile1AddBook;