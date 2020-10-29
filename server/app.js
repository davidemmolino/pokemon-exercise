import express from 'express';
import path from 'path';
import "regenerator-runtime/runtime.js";
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import model, { connectDatabase } from './database/mongodb';
import data from './database/seedData';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config';

// Create express app
const app = express();

// Configure express app to build client code
config.entry['client'] = 'webpack-hot-middleware/client';
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
}));
app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

/* Boiler plate. enables
    logging, parsing json, parsing encoded urls, cookies, serve static assets */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Home/Index route
app.use('/', indexRouter);


/** 
 * Use this endpoint for
 *  - Server side search
 *  - Lazy loading
 */
app.get('/pokemon', (req, res) => {

    const searchString = req.query && req.query.search;
    const limit = req.query && req.query.limit;
    const offset = req.query && req.query.offset;
    console.log('****', limit, offset);

    // empty query object gets all entries in the collection
    let queryArgs = {};

    if (searchString) {
        // allow searching by name
        queryArgs.name = {
            '$regex': searchString,
            '$options': 'i'
        };
    }

    let query = model.Pokemon.find(queryArgs);

    if (offset) {
        query = query.skip(~~offset);
    }

    if (limit) {
        query = query.limit(~~limit);
    }

    query.exec((err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.sendStatus(400);
        }
    });
})


const PORT = process.env.PORT || 8080;

/** Connect to DB and then start listening */
connectDatabase().then(async () => {
    model.Pokemon.create(data, (err, res) => {
        app.listen(PORT, () => {
            console.log(`listening on ${PORT}....`)
            console.log('Press Ctrl+C to quit.')
        });
    });
});

export default app;