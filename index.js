const { request, response, json } = require('express');
const express = require('express');
const app = express()
const port = 8000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
// var elements = ["water", "fire", "earth", "wind"];  
// console.log(elements[0])
// var test = ["Hello", "there", "!"];

// test.join(""); // donnera "Hellothere!"
// test.join(" "); // donnera "Hello there !"
let authors = ["Lawrence Nowel, UK", "William Shakespeare, UK", "Charles Dickens, US", "Oscar Wilde, UK"]
console.log(authors.length)
let books = ["Beowulf", "Hamlet, Othello, Romeo and Juliet, MacBeth", "Oliver Twist, A Christmas Carol", "The Picture of Dorian Gray, The Importance of Being Earnest"]
console.log(books.length)
app.get("/", (request, response) => {
    response.send("Authors API")
    console.log(request.params.id)
})

// for(int i=0;i<n;i++) {
//     System.out.println(a[i]);
// }
// const json = [    {
//         espèce: "Dog",
//         race: "Labrador Retriever",
//         couleur: "Yellow",
//         âge: 6
//     },
// ]
// JSON valide
// {
//     "foo": "bar"
//   }//
// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// // expected output: true
// if (typeof(some_variable) != 'undefined' && some_variable != null)
// {

app.get("/", (request, response) => {
    res.send("Authors API");
})

// if (typeof(some_variable) != 'undefined' && some_variable != null)
// {
app.get("/authors/:id", (request, response) => {
    if (authors[request.params.id -1] === undefined) {
        response.send(`L'auteur avec l'ID ${request.params.id} n'existe pas`)
    } else {
        response.send(`${authors[request.params.id - 1]}`)
    }
})

// livreid 

app.get("/authors/:books/books", (request, response) => {
    response.send(`${books[request.params.books - 1]}`)
})

app.get("/cars/", (request, response) => {
    response.send("error, en même temps c'est des auteurs avec des livres :| ")
})

// JSONNNNNNNNNNNNNNNN :'()

app.get("/json/authors/:id", (request, response) => {
    response.send(`${JSON.stringify([request.params.id - 1])}`)
})
// j'abandonne 
let JSON = [
    {   
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    }
]
// The author with the ID 12133 does not exist

// app.get("/author/:id", (request, response) => {
//     if (request.params.id === "1"){
//     response.send("Lawrence Nowell, UK");
// }   else if (request.params.id === "2"){
//     response.send("William Shakespeare, UK");
// } else if (request.params.id === "3"){
//     response.send("Charles Dickens, US");
// } else if (request.params.id === "4"){
//     response.send("Oscar Wilde, UK");
// } else if (request.params.id === "5"){
//     response.send("Edmond. W, FR");
// }
// })





