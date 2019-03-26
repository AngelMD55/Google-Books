import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Form from "../components/Form/Form";
import Book from "../components/Book/Book";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        books: []
    }    
    componentDidMount(){
        this.loadBooks("Harry potter")
    };

    loadBooks = (query) => {
        API.getBooks(query)
        .then(res=> this.setState({books: res.data.items}))
        .catch(err=> console.log(err));
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // event.preventdefault();
        this.loadBooks(this.state.search)
    };

    saveOnClick = (title, authors, link, image, description) => {
        API.saveBook({
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
        })       
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>(React) Google Books Search</h1>
                    <h3>Search for and Save Books of Interest</h3>
                </Jumbotron>
                <Jumbotron>
                    <h3 className="mb-4 text-left">Book Search: </h3>
                    <form className="mt-3">
                        <Form
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            name="search"
                            placeholder="...example (Harry Potter)"
                        />
                        <button type="button" className="btn btn-primary mt-3 float-right" onClick={this.handleFormSubmit}>Search</button>
                    </form>
                </Jumbotron>
                <div className=" border m-4">
                    <h4 className="text-left ml-3 mt-3">Results:</h4>
                    {this.state.books.map(book => (
                        <Book
                        id= {book.id}
                        title = {book.volumeInfo.title}
                        authors = {book.volumeInfo.authors}
                        link = {book.volumeInfo.infoLink}
                        image = {book.volumeInfo.imageLinks.thumbnail}
                        description = {book.volumeInfo.description}
                        saveOnClick = {this.saveOnClick}                       
                        />
                    ))};
                    
                </div>
            </div>
        )
    }
}

export default Search;