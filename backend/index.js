import express, { request, response } from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';
import { Client, Account } from "appwrite";

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

/* creating the login route */
app.get('/login', (request, response) => {
    console.log(request);
    return response.status(234).send("pls login ma'am");
  });

/*authentication using appwrite - this code is messed up, FIX IT */
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject("APPWRITE_PROJECT_ID");  

    const account = new Account(client);

    app.post('/login', async (request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    const promise = account.createEmailSession('email@example.com', 'password');

    promise.then(function (response) {
        console.log("user logged in",response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
  
    try {
      const session = await accountService.getSession(email, password);
  
      // If the authentication is successful, redirect the user to the home page
      console.log("success bb");
      response.redirect('/');
    } catch (error) {
      // The authentication failed
      response.status(401).send('Invalid email or password');
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
