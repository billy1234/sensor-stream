import { ErrorEvent, MessageEvent, peerSocket } from "messaging";

import enviroment from "./enviroment" 
//dotenv is not allowed on companion so enviroment variables are provided in a file called enviroment.ts

const storageURL : string = encodeURI(enviroment.STORAGE_URL)

peerSocket.onerror = (err : ErrorEvent) => {
  // Handle any errors
  console.log("Connection error: " + err.code + " - " + err.message);
}
peerSocket.onmessage = (message : MessageEvent) => {
  var data = message.data;
  data.dateTime = new Date().toUTCString();
  
  fetch(storageURL, {
    method:"POST", 
    headers: {
    'Content-Type': 'application/json'
    },
  }).then( data => { console.log(data.status)}) 
} 