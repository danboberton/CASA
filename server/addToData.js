import getMongoCollection from "./getMongoCollection.js";

export async function addToData(data){
    return await getMongoCollection(async (collection) => {
        console.log("addToData " + JSON.stringify(data))
        const result = await collection.insertOne(data)
        console.log(`A document was inserted with the _id: ${result.insertedId}`)
        return {success: true, insertID: result.insertedId}
    }).catch(() => {
        console.log("ERROR adding to the database, probably don't have database credentials, returning failure.")
        return {success: false, insertID: 0}
    })
}




