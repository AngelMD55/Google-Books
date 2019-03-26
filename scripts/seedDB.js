const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleBooks"
);

const bookSeed = [
    {
        title: "The Dead Zone",
        authors: "Stephen King",
        description:
            "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
        image: "https://www.gannett-cdn.com/presto/2018/10/19/PBRE/d25f200a-77c7-444b-aa43-30ef0e8158e5-Books.jpg?crop=2459,1386,x0,y272&width=3200&height=1680&fit=bounds",
        link: "https://www.gannett-cdn.com/presto/2018/10/19/PBRE/d25f200a-77c7-444b-aa43-30ef0e8158e5-Books.jpg?crop=2459,1386,x0,y272&width=3200&height=1680&fit=bounds"
    },
    {
        title: "Lord of the Flies",
        authos: "William Golding",
        description:
            "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
            image: "https://www.gannett-cdn.com/presto/2018/10/19/PBRE/d25f200a-77c7-444b-aa43-30ef0e8158e5-Books.jpg?crop=2459,1386,x0,y272&width=3200&height=1680&fit=bounds",
            link: "https://www.gannett-cdn.com/presto/2018/10/19/PBRE/d25f200a-77c7-444b-aa43-30ef0e8158e5-Books.jpg?crop=2459,1386,x0,y272&width=3200&height=1680&fit=bounds"
    },
    {
        title: "The Catcher in the Rye",
        authors: "J.D. Salinger",
        description:
            "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
            image: "https://www.gannett-cdn.com/presto/2018/10/19/PBRE/d25f200a-77c7-444b-aa43-30ef0e8158e5-Books.jpg?crop=2459,1386,x0,y272&width=3200&height=1680&fit=bounds",
            link: "https://www.gannett-cdn.com/presto/2018/10/19/PBRE/d25f200a-77c7-444b-aa43-30ef0e8158e5-Books.jpg?crop=2459,1386,x0,y272&width=3200&height=1680&fit=bounds"
    }
];


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });