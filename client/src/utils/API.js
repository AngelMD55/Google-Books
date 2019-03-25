import axios from "axios"
// import {APIKEY} from "../keys"
require("dotenv").config();

export default {
    getBooks: function(query){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "+intitle&key=AIzaSyC2_6dSbl3F2nbouXImthNBq3hcGMDsVaU")
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData);
    },
    getSavedBooks: function(){
        return axios.get("api/books")
    },
    deleteBook: function(id){
        return axios.delete("/api/books/" + id)
    }
}