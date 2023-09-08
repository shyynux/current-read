import express, { request, response } from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoute.js"

const app = express();

/* Middleware for parsing request body */
app.use(express.json());

/* Creating the HTTP Route */
app.get('/', (request, response) => {
    console.log(request);
        return response.status(234).send("Welcome to current-read");
});

app.use('/books', booksRoute);

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
