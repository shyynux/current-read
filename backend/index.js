import express, { request, response } from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

/* Middleware for parsing request body */
app.use(express.json());

/* Middleware for handling CORS POLICY */
// Allow all origins
app.use(cors());

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
