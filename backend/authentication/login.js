import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(APPWRITE_PROJECT_ID);                 // Your project ID

const account = new Account(client);

const promise = account.createEmailSession('email@example.com', 'password');

promise.then(function (response) {
    console.log("user logged in",response); // Success
}, function (error) {
    console.log(error); // Failure
});
