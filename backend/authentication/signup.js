import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(APPWRITE_PROJECT_ID);               // Your project ID

const account = new Account(client);

const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log('appwrite auth - ',response); // Success
}, function (error) {
    console.log('appwrite error -',error); // Failure
});
