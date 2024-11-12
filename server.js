const express = require('express');
const { Server } = require('socket.io');
const { Client } = require('ssh2');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('Client connected');
    let conn = null;

    socket.on('connectSSH', ({ ip, port, username, password }) => {
        conn = new Client();

        conn.on('ready', () => {
            socket.emit('status', 'Connected to VPS!');
            socket.emit('connected');
            conn.shell((err, stream) => {
                if (err) return socket.emit('status', `Error: ${err.message}`);

                // Nhận dữ liệu từ VPS và gửi đến client
                stream.on('data', (data) => socket.emit('data', data.toString()));

                // Nhận dữ liệu từ client và gửi đến VPS
                socket.on('input', (data) => stream.write(data));

                // Xử lý sự kiện đóng kết nối
                stream.on('close', () => conn.end());
            });
        }).on('error', (err) => {
            socket.emit('status', `Connection error: ${err.message}`);
            socket.emit('disconnected');
        }).on('end', () => {
            socket.emit('status', 'Disconnected from VPS.');
            socket.emit('disconnected');
        }).connect({
            host: ip,
            port: parseInt(port),
            username: username,
            password: password
        });
    });

    socket.on('disconnectSSH', () => {
        if (conn) {
            conn.end();
            socket.emit('status', 'Disconnected from VPS.');
            socket.emit('disconnected');
        }
    });

    socket.on('disconnect', () => {
        if (conn) {
            conn.end();
        }
        console.log('Client disconnected');
    });
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
