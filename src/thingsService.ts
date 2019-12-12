import express = require('express');
import bodyParser = require('body-parser');
const thingsRoutes = require('./routes/things');

const app: express.Application = express();

// Connect to database

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

// Routes
app.use('/api/things', thingsRoutes);

app.use('/', (req: any, res: any, next: any) => {
    res.status(200).json({
        message: 'Service is active'
    });
});

module.exports = app;