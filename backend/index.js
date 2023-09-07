import express, { request, response } from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookmodel.js";

const app = express();

/* Middleware for parsing request body */
app.use(express.json());

/* Creating the HTTP Route */
app.get('/', (request, response) => {
    console.log(request);
        return response.status(234).send("Welcome to current-read");
});

/* Route for saving a new book */
app.post('/books', async (request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.status
        ){
            return response.status(400).send({
                message: 'Send all required fields, title, author, status',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            status: request.body.status,
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book);

    } catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}); 

/* Get all the books saved in DB */
app.get('/books', async (request, response) => {
    try{
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

/* Get one book by id */
app.get('/books/:id', async (request, response) => {
    try{
        const { id } = request.params;
        const book = await Book.findById(id);

        return response.status(200).json(book); 
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

/* Route for updating a book */
app.put('/books/:id', async (request, response) =>  {
    try{
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.status
        ) {
            return response.status(400).send({
                message: 'Send all required fields, title, author, status',
            });
        }
        const { id } = request.params;
        const newBook = request.body;

        const updatedBook = await Book.findByIdAndUpdate(id, newBook);

        if(!updatedBook) {
            return response.status(404).json({ message: 'Book not found'});
        }
        
        return response.status(200).send({ message: 'Book updated successfully'});

    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

/* Route for deleting a book */
app.delete('/books/:id', async (request, response) =>  {
    try{
        const { id } = request.params;
        const deletedBook = await Book.findByIdAndDelete(id);

        if(!deletedBook) {
            return response.status(404).json({ message: 'Book not found'});
        }
        
        return response.status(200).send({ message: 'Book deleted successfully'});

    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

/* connect to mongodb */
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`App connected to db`);
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT} `);
        });
    })
    .catch((error) => {
        console.log(error);
    });
