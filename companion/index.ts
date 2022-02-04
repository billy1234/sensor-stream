import { ErrorEvent, MessageEvent, peerSocket } from "messaging";

peerSocket.onerror = (err : ErrorEvent) => {
  // Handle any errors
  console.log("Connection error: " + err.code + " - " + err.message);
}
peerSocket.onmessage = (message : MessageEvent) => {
  var data = message.data;
  data.dateTime = new Date().toUTCString();
  console.log(data);
} 