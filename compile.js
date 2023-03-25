const pkg = require('./package.json');
const DATATYPES = {
    IsRaceOn: 's32',
    TimestampMS: 'u32',
    EngineMaxRpm: 'f32',
    EngineIdleRpm: 'f32',
    CurrentEngineRpm: 'f32',
    AccelerationX: 'f32',
    AccelerationY: 'f32',
    AccelerationZ: 'f32',
    VelocityX: 'f32',
    VelocityY: 'f32',
    VelocityZ: 'f32',
    AngularVelocityX: 'f32',
    AngularVelocityY: 'f32',
    AngularVelocityZ: 'f32',
    Yaw: 'f32',
    Pitch: 'f32',
    Roll: 'f32',
    NormalizedSuspensionTravelFrontLeft: 'f32',
    NormalizedSuspensionTravelFrontRight: 'f32',
    NormalizedSuspensionTravelRearLeft: 'f32',
    NormalizedSuspensionTravelRearRight: 'f32',
    TireSlipRatioFrontLeft: 'f32',
    TireSlipRatioFrontRight: 'f32',
    TireSlipRatioRearLeft: 'f32',
    TireSlipRatioRearRight: 'f32',
    WheelRotationSpeedFrontLeft: 'f32',
    WheelRotationSpeedFrontRight: 'f32',
    WheelRotationSpeedRearLeft: 'f32',
    WheelRotationSpeedRearRight: 'f32',
    WheelOnRumbleStripFrontLeft: 's32',
    WheelOnRumbleStripFrontRight: 's32',
    WheelOnRumbleStripRearLeft: 's32',
    WheelOnRumbleStripRearRight: 's32',
    WheelInPuddleDepthFrontLeft: 'f32',
    WheelInPuddleDepthFrontRight: 'f32',
    WheelInPuddleDepthRearLeft: 'f32',
    WheelInPuddleDepthRearRight: 'f32',
    SurfaceRumbleFrontLeft: 'f32',
    SurfaceRumbleFrontRight: 'f32',
    SurfaceRumbleRearLeft: 'f32',
    SurfaceRumbleRearRight: 'f32',
    TireSlipAngleFrontLeft: 'f32',
    TireSlipAngleFrontRight: 'f32',
    TireSlipAngleRearLeft: 'f32',
    TireSlipAngleRearRight: 'f32',
    TireCombinedSlipFrontLeft: 'f32',
    TireCombinedSlipFrontRight: 'f32',
    TireCombinedSlipRearLeft: 'f32',
    TireCombinedSlipRearRight: 'f32',
    SuspensionTravelMetersFrontLeft: 'f32',
    SuspensionTravelMetersFrontRight: 'f32',
    SuspensionTravelMetersRearLeft: 'f32',
    SuspensionTravelMetersRearRight: 'f32',
    CarOrdinal: 's32',
    CarClass: 's32',
    CarPerformanceIndex: 's32',
    DrivetrainType: 's32',
    NumCylinders: 's32',
    HorizonPlaceholder: 'hzn',
    PositionX: 'f32',
    PositionY: 'f32',
    PositionZ: 'f32',
    Speed: 'f32',
    Power: 'f32',
    Torque: 'f32',
    TireTempFrontLeft: 'f32',
    TireTempFrontRight: 'f32',
    TireTempRearLeft: 'f32',
    TireTempRearRight: 'f32',
    Boost: 'f32',
    Fuel: 'f32',
    DistanceTraveled: 'f32',
    BestLap: 'f32',
    LastLap: 'f32',
    CurrentLap: 'f32',
    CurrentRaceTime: 'f32',
    LapNumber: 'u16',
    RacePosition: 'u8',
    Accel: 'u8',
    Brake: 'u8',
    Clutch: 'u8',
    HandBrake: 'u8',
    Gear: 'u8',
    Steer: 's8',
    NormalizedDrivingLine: 's8',
    NormalizedAIBrakeDifference: 's8'
}

console.log(`/**
* DO NOT EDIT
* use \`node compile.js  > generated_parse_data.js\` to generate
* @version=${pkg.version}
* @generated_at=${new Date()}
* @param msg Buffer
* @returns payload Object
*/
module.exports=function parseData(msg){
  let payload = {};`)

let offset = 0;
for (let [name,type] of Object.entries(DATATYPES)) {
    switch (type) {
        case 's32':
            console.log(`  payload.${name}=msg.readInt32LE(${offset});`)
            offset+=4
            break
        case 'u32':
            console.log(`  payload.${name}=msg.readUInt32LE(${offset});`)
            offset+=4
            break
        case 'f32':
            console.log(`  payload.${name}=msg.readFloatLE(${offset});`)
            offset+=4
            break
        case 'u16':
            console.log(`  payload.${name}=msg.readUInt16LE(${offset});`)
            offset+=2
            break
        case 'u8':
            console.log(`  payload.${name}=msg.readUInt8(${offset});`)
            offset+=1
            break
        case 's8':
            console.log(`  payload.${name}=msg.readInt8(${offset});`)
            offset+=1
            break
        case 'hzn':
            console.log(`  payload.${name}=msg.subarray(${offset},${offset+12}).toString();`)
            offset+=12
            break
    }
}
console.log(`  // ignoring msg[${offset}] and so on
  return payload;
}`)

if(require.main!==module){
    console.error('you should not require this file directly')
    process.exit(1)
}