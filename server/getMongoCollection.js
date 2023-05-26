import databaseConfig from "../config/databaseConfig.js"
import {MongoClient, ServerApiVersion} from "mongodb";


export default async function getMongoCollection(callback) {
    let client

    try {
        const mongoKey = await import('./creds/mongoKey.js')
        client = new MongoClient(mongoKey, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1
        });
    } catch (e) {
        console.log("Unable to load database, maybe you don't have the credential?")
        throw new Error()
    }

    try {
        const database = client.db(databaseConfig.database);
        const collection = database.collection(databaseConfig.collection);

        return callback(collection)
    } catch {
        console.log("ERROR connecting to database")
    } finally {
        await client.close();
    }
}
