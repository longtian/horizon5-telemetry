/**
* DO NOT EDIT
* use `node compile.js  > generated_parse_data.js` to generate
* @version v0.0.2
* @link https://github.com/longtian/horizon5-telemetry/blob/v0.0.2/compile.js
* @param {Buffer} msg raw buffer message
* @returns {Object} parsed payload
*/
module.exports=function parseData(msg){
  let payload = {};
  payload.IsRaceOn=msg.readInt32LE(0);
  payload.TimestampMS=msg.readUInt32LE(4);
  payload.EngineMaxRpm=msg.readFloatLE(8);
  payload.EngineIdleRpm=msg.readFloatLE(12);
  payload.CurrentEngineRpm=msg.readFloatLE(16);
  payload.AccelerationX=msg.readFloatLE(20);
  payload.AccelerationY=msg.readFloatLE(24);
  payload.AccelerationZ=msg.readFloatLE(28);
  payload.VelocityX=msg.readFloatLE(32);
  payload.VelocityY=msg.readFloatLE(36);
  payload.VelocityZ=msg.readFloatLE(40);
  payload.AngularVelocityX=msg.readFloatLE(44);
  payload.AngularVelocityY=msg.readFloatLE(48);
  payload.AngularVelocityZ=msg.readFloatLE(52);
  payload.Yaw=msg.readFloatLE(56);
  payload.Pitch=msg.readFloatLE(60);
  payload.Roll=msg.readFloatLE(64);
  payload.NormalizedSuspensionTravelFrontLeft=msg.readFloatLE(68);
  payload.NormalizedSuspensionTravelFrontRight=msg.readFloatLE(72);
  payload.NormalizedSuspensionTravelRearLeft=msg.readFloatLE(76);
  payload.NormalizedSuspensionTravelRearRight=msg.readFloatLE(80);
  payload.TireSlipRatioFrontLeft=msg.readFloatLE(84);
  payload.TireSlipRatioFrontRight=msg.readFloatLE(88);
  payload.TireSlipRatioRearLeft=msg.readFloatLE(92);
  payload.TireSlipRatioRearRight=msg.readFloatLE(96);
  payload.WheelRotationSpeedFrontLeft=msg.readFloatLE(100);
  payload.WheelRotationSpeedFrontRight=msg.readFloatLE(104);
  payload.WheelRotationSpeedRearLeft=msg.readFloatLE(108);
  payload.WheelRotationSpeedRearRight=msg.readFloatLE(112);
  payload.WheelOnRumbleStripFrontLeft=msg.readInt32LE(116);
  payload.WheelOnRumbleStripFrontRight=msg.readInt32LE(120);
  payload.WheelOnRumbleStripRearLeft=msg.readInt32LE(124);
  payload.WheelOnRumbleStripRearRight=msg.readInt32LE(128);
  payload.WheelInPuddleDepthFrontLeft=msg.readFloatLE(132);
  payload.WheelInPuddleDepthFrontRight=msg.readFloatLE(136);
  payload.WheelInPuddleDepthRearLeft=msg.readFloatLE(140);
  payload.WheelInPuddleDepthRearRight=msg.readFloatLE(144);
  payload.SurfaceRumbleFrontLeft=msg.readFloatLE(148);
  payload.SurfaceRumbleFrontRight=msg.readFloatLE(152);
  payload.SurfaceRumbleRearLeft=msg.readFloatLE(156);
  payload.SurfaceRumbleRearRight=msg.readFloatLE(160);
  payload.TireSlipAngleFrontLeft=msg.readFloatLE(164);
  payload.TireSlipAngleFrontRight=msg.readFloatLE(168);
  payload.TireSlipAngleRearLeft=msg.readFloatLE(172);
  payload.TireSlipAngleRearRight=msg.readFloatLE(176);
  payload.TireCombinedSlipFrontLeft=msg.readFloatLE(180);
  payload.TireCombinedSlipFrontRight=msg.readFloatLE(184);
  payload.TireCombinedSlipRearLeft=msg.readFloatLE(188);
  payload.TireCombinedSlipRearRight=msg.readFloatLE(192);
  payload.SuspensionTravelMetersFrontLeft=msg.readFloatLE(196);
  payload.SuspensionTravelMetersFrontRight=msg.readFloatLE(200);
  payload.SuspensionTravelMetersRearLeft=msg.readFloatLE(204);
  payload.SuspensionTravelMetersRearRight=msg.readFloatLE(208);
  payload.CarOrdinal=msg.readInt32LE(212);
  payload.CarClass=msg.readInt32LE(216);
  payload.CarPerformanceIndex=msg.readInt32LE(220);
  payload.DrivetrainType=msg.readInt32LE(224);
  payload.NumCylinders=msg.readInt32LE(228);
  payload.HorizonPlaceholder=msg.subarray(232,244).toString();
  payload.PositionX=msg.readFloatLE(244);
  payload.PositionY=msg.readFloatLE(248);
  payload.PositionZ=msg.readFloatLE(252);
  payload.Speed=msg.readFloatLE(256);
  payload.Power=msg.readFloatLE(260);
  payload.Torque=msg.readFloatLE(264);
  payload.TireTempFrontLeft=msg.readFloatLE(268);
  payload.TireTempFrontRight=msg.readFloatLE(272);
  payload.TireTempRearLeft=msg.readFloatLE(276);
  payload.TireTempRearRight=msg.readFloatLE(280);
  payload.Boost=msg.readFloatLE(284);
  payload.Fuel=msg.readFloatLE(288);
  payload.DistanceTraveled=msg.readFloatLE(292);
  payload.BestLap=msg.readFloatLE(296);
  payload.LastLap=msg.readFloatLE(300);
  payload.CurrentLap=msg.readFloatLE(304);
  payload.CurrentRaceTime=msg.readFloatLE(308);
  payload.LapNumber=msg.readUInt16LE(312);
  payload.RacePosition=msg.readUInt8(314);
  payload.Accel=msg.readUInt8(315);
  payload.Brake=msg.readUInt8(316);
  payload.Clutch=msg.readUInt8(317);
  payload.HandBrake=msg.readUInt8(318);
  payload.Gear=msg.readUInt8(319);
  payload.Steer=msg.readInt8(320);
  payload.NormalizedDrivingLine=msg.readInt8(321);
  payload.NormalizedAIBrakeDifference=msg.readInt8(322);
  // ignoring msg[323] and so on
  return payload;
}
