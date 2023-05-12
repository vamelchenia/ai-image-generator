/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from 'express';
// import dotenv from 'dotenv';

// Import WelcomeController from controllers entry point
import {WelcomeController} from './controllers';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = parseInt(process.env.PORT || "3000", 10);
// dotenv.config();
const api = process.env.HUGGING_API_KEY;
// Mount the WelcomeController at the /welcome route
app.use('/welcome', WelcomeController);
// app.use(express.static('pages'));
// app.use(express.static('res'));
app.get('/favicon.ico', (req, res) => res.status(204));
// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    // console.log('process.env.port = ' + port);
    // console.log('process.env.HUGGING_API_KEY = ' + process.env.HUGGING_API_KEY);
    console.log(`Listening at http://localhost:${port}/`);
});