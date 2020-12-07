import dotenv from 'dotenv'; /** import the dot environment variable */
import app from './app'; /** import the application file */

import { Mongo } from './configuration/database'; /** import the database configuration */

dotenv.config(); // call the dot environment configuration file

const database: Mongo = new Mongo(); /* export the mongo class */
const PORT: string | number = process.env.PORT || 6000; /* check for the port number in environment PORT variable or set 5000 PORT */

process.env.TZ="UTC"; // set the time zone to UTC

/** check for mongodb connection */
database.mongoSetup().catch((err) => {
    console.log('error message ---> ', err.message);
});

/** application listen at the port */
app.listen(PORT, () => {
    console.log('time zone --> ', Intl.DateTimeFormat().resolvedOptions().timeZone);
    console.log('Server runs at port --> ', PORT);
});