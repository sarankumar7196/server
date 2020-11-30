import { MongoClient, Db } from 'mongodb'; // import mongo client and database types

require('dotenv').config();

export let db: Db;
export let mongoClient: MongoClient;

export class Mongo {
    public async mongoSetup() {
        try {
            const client: MongoClient = await MongoClient.connect(process.env.DB_URL as string, { useUnifiedTopology: true, useNewUrlParser: true });
            mongoClient = client; //set the mongodb client
            
            db = client.db();
        } catch (err) {
            console.log('err --> ', err);
            throw err;
        }
    }
}
