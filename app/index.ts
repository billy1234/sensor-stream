import { Accelerometer } from "accelerometer";
import { BodyPresenceSensor } from "body-presence";
import { Gyroscope } from "gyroscope";
import { HeartRateSensor } from "heart-rate";

const sensors : any[] = [];

const data : any = {accelData : null,bpsData : null, gyroData : null, hrm : null}

if (Accelerometer) {
  const accel = new Accelerometer({ frequency: 1 });
  accel.addEventListener("reading", () => {
    data.accelData = {
      x: accel.x ? accel.x.toFixed(1) : 0,
      y: accel.y ? accel.y.toFixed(1) : 0,
      z: accel.z ? accel.z.toFixed(1) : 0
    }
  });
  sensors.push(accel);
  accel.start();
}

if (BodyPresenceSensor) {
  const bps = new BodyPresenceSensor();
  bps.addEventListener("reading", () => {
    data.bpsData = {
      presence: bps.present
    }
  });
  sensors.push(bps);
  bps.start();
}

if (Gyroscope) {
  const gyro = new Gyroscope({ frequency: 1 });
  gyro.addEventListener("reading", () => {
    data.gyroData = {
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
    data.hrmData = {
      heartRate: hrm.heartRate ? hrm.heartRate : 0
    }
  });
  sensors.push(hrm);
  hrm.start();
}
