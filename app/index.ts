import { Accelerometer } from "accelerometer";
import { BodyPresenceSensor } from "body-presence";
import { Gyroscope } from "gyroscope";
import { HeartRateSensor } from "heart-rate";

import { ErrorEvent, peerSocket } from "messaging";


const sensors : any[] = [];

const data : any = {acceleration : null, bodyPresence : null, gyro : null, heartRate : null}
const intervalMS = 100
if (Accelerometer) {
  const accel = new Accelerometer({ frequency: 1 });
  accel.addEventListener("reading", () => {
    data.acceleration = {
      x: accel.x ? accel.x.toFixed(1) : 0,
      y: accel.y ? accel.y.toFixed(1) : 0,
      z: accel.z ? accel.z.toFixed(1) : 0
    }
  });
  sensors.push(accel);
  accel.start();
}

if (BodyPresenceSensor) {
  const bps = new BodyPresenceSensor({ frequency: 1 });
  bps.addEventListener("reading", () => {
    data.bodyPresence = {
      presence: bps.present
    }
  });
  sensors.push(bps);
  bps.start();
}

if (Gyroscope) {
  const gyro = new Gyroscope({ frequency: 1 });
  gyro.addEventListener("reading", () => {
    data.gyro = {
      x: gyro.x ? gyro.x.toFixed(1) : 0,
      y: gyro.y ? gyro.y.toFixed(1) : 0,
      z: gyro.z ? gyro.z.toFixed(1) : 0,
    }
  });
  sensors.push(gyro);
  gyro.start();
}

if (HeartRateSensor) {
  const hrm = new HeartRateSensor({ frequency: 1 });
  hrm.addEventListener("reading", () => {
    data.heartRate = {
      heartRate: hrm.heartRate ? hrm.heartRate : 0
    }
  });
  sensors.push(hrm);
  hrm.start();
}

peerSocket.onerror = (err : ErrorEvent) => {
  // Handle any errors
  console.log("Connection error: " + err.code + " - " + err.message);
}

setInterval(() => {
  if (peerSocket.readyState === peerSocket.OPEN) {
    peerSocket.send(data);
  }},intervalMS);