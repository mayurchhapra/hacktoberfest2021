import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'app-module-path/register';
import path from 'path';
import database from 'config/database';
import rateLimit from 'express-rate-limit';
import constants from 'config/constants';
import Router from 'routes';

const app = express();

// Security config
app.use(helmet());

// Cross origin configuration
app.use(cors());

// Other settings
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Limit number of requests from an ip in 1 mili second
const limiter = rateLimit({
    windowMs: constants.blockRequest,
    max: constants.requestLimit,
});
app.use(limiter);

// Database connection
database.connect();

// Allow public path access
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

// Setup routes
app.use('/', Router);

export default app;
