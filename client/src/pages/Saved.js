import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Savedbooks from "../components/Savedbooks/SavedBooks";
import API from "../utils/API";

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount() {
        this.loadSavedBooks();
    }

    loadSavedBooks = () => {
        API.getSavedBooks()
            .then(res => this.setState({savedBooks : res.data}))
            .catch(err => console.log(err));
    }

    deleteSavedBook = (id) => {
        API.deleteBook(id)
            .then(res=> this.loadSavedBooks())
            .catch(err=> console.log(err))
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>(React) Google Books Search</h1>
                    <h3>Search for and Save Books of Interest</h3>
                </Jumbotron>
                <h1>saved</h1>

                <div className=" border m-4">
                <h4 className="text-left ml-3 mt-3">Results:</h4>
                {this.state.savedBooks.map(book => (
                    <Savedbooks
                    id = {book._id}
                    title = {book.title}
                    authors = {book.authors}
                    description = {book.description}
                    image = {book.image}
                    link = {book.link}
                    deleteSavedBook = {() => this.deleteSavedBook(book._id)}
                    />
                ))}
                </div>
            </div>
        )
    }
}

export default Saved
