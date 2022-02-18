import { MongoClient} from 'mongodb'

const connection_string = `mongodb+srv://${process.env["DB_USER"]}:${process.env["DB_PASSWORD"]}@${process.env["DB_URL"]}/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(connection_string)
const db_name = process.env["DB_NAME"]
const collection_name = process.env["COLLECTION_NAME"]


export async function StoreCollection  (data: any[]) : Promise<void>{
    const conn = await client.connect()
    conn.db(db_name).collection(collection_name).insertMany(data)
    conn.close()

}