import { Handler, Context } from 'aws-lambda';
import {StoreCollection} from './services/sensor-db';

import * as dotenv from "dotenv";
dotenv.config()


export const store : Handler = async (event : any, context: Context) => {
  try {
    await StoreCollection(event["data"])
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
