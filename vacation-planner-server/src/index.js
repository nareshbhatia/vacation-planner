// -----------------------------------------------------------------------------
// Load environment variables from the .env file before doing anything else
// -----------------------------------------------------------------------------
import { config as envConfig } from 'dotenv';
envConfig();

// --- Remaining imports -----
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { VacationAdapter } from './vacation.adapter';

// -----------------------------------------------------------------------------
// Create and configure the Express App
// -----------------------------------------------------------------------------
const app = express();

// Add middleware to enable CORS
app.use(cors());

// Add middleware to parse the POST data of the body
app.use(bodyParser.urlencoded({ extended: true }));

// Add middleware to parse application/json
app.use(bodyParser.json());

// Add routes
app.post('/planning-request', VacationAdapter.startVacationPlanning);
app.post('/step-response', VacationAdapter.processAnswers);

// -----------------------------------------------------------------------------
// Start the HTTP Server using the Express App
// -----------------------------------------------------------------------------
const port = process.env.SERVER_PORT || 8080;
const server = createServer(app);
server.listen(port, () => console.log('Listening on port ' + port));

// -----------------------------------------------------------------------------
// When SIGINT is received (i.e. Ctrl-C is pressed), shutdown services
// -----------------------------------------------------------------------------
process.on('SIGINT', () => {
    console.log('SIGINT received ...');
    console.log('Shutting down the server');

    server.close(() => {
        console.log('Server has been shutdown');
        console.log('Exiting process ...');
        process.exit(0);
    });
});
