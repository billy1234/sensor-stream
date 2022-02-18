import {MongoClient} from 'mongodb'

export async function StoreCollection  (data: any[]) : Promise<void>{
    const conn = await getClient().connect()

    await conn.db(process.env["DB_NAME"])
        .collection(process.env["COLLECTION_NAME"])
        .insertMany(data)

    await conn.close()

}

function getClient() : MongoClient{
    if (!(process.env["DB_USER"] && process.env["DB_PASSWORD"] && process.env["DB_URL"] && process.env["DB_NAME"] && process.env["COLLECTION_NAME"]))
        throw `Enviroment variable error. Check .env file or enviroment variables DB_USER:${process.env["DB_USER"]} DB_PASSWORD:${process.env["DB_PASSWORD"]} DB_URL:${process.env["DB_URL"]} DB_NAME:${process.env["DB_NAME"]} COLLECTION_NAME:${process.env["COLLECTION_NAME"]}` 

    return new MongoClient(`mongodb+srv://${process.env["DB_USER"]}:${process.env["DB_PASSWORD"]}@${process.env["DB_URL"]}/myFirstDatabase?retryWrites=true&w=majority`)
}