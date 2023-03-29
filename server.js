const udp = require('dgram');
const WebSocket = require('ws').WebSocket;
const server = udp.createSocket('udp4');
const parseData = require('./generated_parse_data');

const {
    PORT = 6000,
    THRESHOLD='100',
    URL,
    TOKEN
} = process.env

let client = null;
let last_time = Date.now()

if (TOKEN && URL) {
    client = new WebSocket(URL, {
        headers: {
            "Authorization": `Bearer ${TOKEN}`
        }
    });
    client.on('error', console.error);
    client.on('open', function open() {
        console.log(`client connected to ${URL}`)
    });
}

server.on('message', msg => {
    const payload = parseData(msg)
    const metrics = [
        `Speed=${payload.Speed*3.6}`,
        `Accel=${payload.Accel}`,
        `Brake=${payload.Brake}`,
        `HandBrake=${payload.HandBrake}`,
        `Steer=${payload.Steer}`,
        `Gear=${payload.Gear}`,
        `Height=${Math.round(payload.PositionY - 100)}`
    ]
    const metric_line = `car_status ${metrics.join(",")} ${Date.now()}000000`
    if (client && client.readyState === 1) {
        if (Date.now() - last_time > parseInt(THRESHOLD,10)) {
            last_time = Date.now()
            client.send(metric_line)
        }
    }
});
server.on('listening', () => {
    console.log(`server listening on port=${PORT}, threshold=${THRESHOLD}`)
})

server.bind(PORT);