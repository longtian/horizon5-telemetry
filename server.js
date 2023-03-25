const udp = require('dgram');
const server = udp.createSocket('udp4');

const parseData = require('./generated_parse_data');
const {
    port = 6000
} = process.env

server.on('message', msg => {
    const payload = parseData(msg)
    console.clear();
    console.log(`
    CarOrdinal: ${payload.CarOrdinal}
    CarClass: ${payload.CarClass}
    CarPerformanceIndex: ${payload.CarPerformanceIndex}
    IsRaceOn: ${payload.IsRaceOn}
    Speed: ${Math.round(payload.Speed*3.6)} KM/S
    Accel: ${payload.Accel}
    Brake: ${payload.Brake}
    HandBrake: ${payload.HandBrake}
    Gear: ${payload.Gear}
    Steer: ${payload.Steer}
    Height: ${Math.round(payload.PositionY-100)} M
    NormalizedAIBrakeDifference: ${payload.NormalizedAIBrakeDifference}
    `);
});

server.bind(port);