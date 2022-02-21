import { APIGatewayProxyHandler, APIGatewayProxyEvent } from 'aws-lambda';
import {StoreCollection} from './services/sensor-db';

import * as dotenv from "dotenv";
dotenv.config()


export const store : APIGatewayProxyHandler = async (event : APIGatewayProxyEvent) => {
  var data = JSON.parse(event.body)["data"]

  console.log(data)
  data = data.map(x => {
    x._id = "[" + x["user"] + "]" + x["dateTime"]
    return x
  });

  try {
    await StoreCollection(data)
    return {
      statusCode: 201,
      body: JSON.stringify(
        {
          message: 'Success'
        },
        null,
        2
      ),
    };
  }
  catch (err){
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: err
        },
        null,
        2
      ),
    };
  }
  finally {}
  
};
