const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001

//Midleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}
//Add routes
app.use(routes);

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks", { useNewUrlParser: true });


//start server
app.listen(PORT, () =>{
    console.log("Server listening on port http://localhost:" + PORT)
})