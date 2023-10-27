// express framework npm intsall express
// npm intsall body-parser
const express = require('express')
const app = express()
const port = 4000
// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// req is requesting a responce
app.get('/dataRep', (req, res) => {
    res.send('“Welcome to Data Representation & Querying')
})

// req is requesting a responce
app.get('/whatever', (req, res) => { // /whatever = port 
    res.send("Good Bye!"); // returns
});

// req is requesting a responce
app.get('/hello/:Ted', (req, res) => {
    res.send("Hello " + req.params.Ted);
});

// client to the server for fname and lname
app.get('/name', (req, res)=>{
    res.send('Hello '+req.query.fname+ ' '+req.query.lname);
})

// client to the server
app.get('/post', (req, res)=>{
    res.send('Hello '+req.query.user+ ' '+req.query.pass);
})

// req is requesting a responce
app.get('/test', (req, res) => {

    res.sendFile(__dirname+'/index.html');
});


// req is requesting a responce
app.get('/api/books', (req, res) => {
    // json caller
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ]
    res.json({
        myBooks_books: data,
        "Message": "Hello frome server.js"
    })
})


    // listening to what port the server is on
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })