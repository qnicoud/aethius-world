// import required packages.
const express = require("express");
const ejs = require("ejs");


// Generate the app object.
const app = express();

// Allow ejs to be used by the app.
app.set("view engine", "ejs");

/* Allows to parse input from client (next line) &
 define a directory to store the static content 
 that will be send at each request (2nd next line). */
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// When root is requested, send the home page of the blog.
app.get('/', (req, res) => {
    res.render("home");
});

// When /about is requested, send the 'about me' page.
app.get('/about', (req, res) => {
    res.render("about");
});

// When /contact is requested, send the contact page.
app.get('/contact', (req, res) => {
    res.render("contact");
});

// When /CV is requested, send the contact page.
app.get('/CV', (req, res) => {
    res.render("CV");
});

// Nodejs server set to listen on port 3000
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});