import express from 'express'; /* import the express application */
import path from 'path'; /* import the path library */
import bodyParser from 'body-parser'; /* import the Body Parser Library(used to parse the incoming request) */
import cors from 'cors'; /* import the Cors Library */
import helmet from 'helmet'; /* import the helmet library */
import morgan from 'morgan'; /* import the Morgan Library */
import compression from 'compression'; /* import the Compression Library */

import Routes from './route'; /* import the Route files */

class App {
    public app: express.Application; /* contains the express application */
    private routePrev: any; /* contains the route files */
    
    constructor() {
        this.app = express(); /* set the express application */
        this.routePrev = Routes; /* set the route files */
        this.config(); /* call the configuration method */
    }

    /* Method to set middleware and initialize the route index file */
    private config(): void {
        this.app.use(compression()); /* set the compression middleware to compression the response size */
        //this.app.use(history()); /** set the history middleware to handle the point the application to the starting index */
        this.app.use(morgan('dev')); /* set the morgan library as middleware to log the incoming request in the development environment */ 
        this.app.use(helmet()); /* set the helmet library as middleware to secure our application by setting various http headers */
        this.app.use(cors({ credentials: true })); /* set the cors library as middleware to enable the credentials in the request */
        this.app.use(bodyParser.urlencoded({ extended: true })); /* set the body parser as middleware to parse the incoming application/x-ww-form-urlencoded request */
        this.app.use(bodyParser.json()); /* set the body parser as middleware to parse the incoming json request */
        //this.app.use(device.capture()); /* set the express device middleware to capture the device information */
        
        this.app.use('/', express.static(path.join(__dirname, '../', 'public'))); /** expose the public folder to the client */
        //this.app.use('/', express.static(path.join(__dirname, '../', 'dist'))); /** expose the dist folder */

        this.routePrev.routeSetup(this.app); /* call the index route method */
    }
}

export default new App().app;