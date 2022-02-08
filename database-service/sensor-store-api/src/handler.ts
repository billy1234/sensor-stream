import { Handler, Context } from 'aws-lambda';
import { MongoClient} from 'mongodb'

import * as dotenv from "dotenv";
dotenv.config();

const connection_string = `mongodb+srv://${process.env["DB_USER"]}:${process.env["DB_PASSWORD"]}@cluster0.8zhwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(connection_string)


export const store : Handler = async (event : any, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
