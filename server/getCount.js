import getMongoCollection from "./getMongoCollection.js";

export async function getCount() {

    return await getMongoCollection(async (collection) => {
        console.log("getCount")
        const result = await collection.count()
        console.log(`${result} documents in this collection.`)

        return {count: result}
    }).catch(() => {
        console.log("ERROR getting a count from the database, probably don't have database credentials, returning lucky number 7 instead.")
        return {count: 7}
    })
}