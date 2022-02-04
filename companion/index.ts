import * as messaging from "messaging";

messaging.peerSocket.addEventListener("open", (evt) => {
  console.log("Ready to send or receive messages");
});