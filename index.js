const express = require('express')

const app = express()

app.use(express.json())
let books = []

app.post('/books', async (req, res) => {
    //input
    let newTitle = req.body.title
    let newPrice = req.body.price
    let newUnit = req.body.unit
    let newIsbn = req.body.isbn
    let newImageUrl = req.body.imageUrl

    // key: value
    let newBook = {
        title: newTitle,
        price: newPrice,
        unit: newUnit,
        isbn: newIsbn,
        imageUrl: newImageUrl
    
    }
    let bookID = 0

    //process
    books.push(newBook)
    bookID = books.length -1
    
    //output
    res.status(201).json(bookID)
})

const port = 3000
app.listen(port, () => console.log(`Server startes again at ${port}`))