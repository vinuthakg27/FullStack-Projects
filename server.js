const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

//set up the server
const app = express(); //creates express application
const server = http.createServer(app); // Create HTTP server
const io = socketIo(server); // Attach socket.io to the server

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle socket.io connections
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Listen for 'chat message' events from clients
    socket.on('chat message', (msg) => {
        console.log('Message received: ' + msg);  // For debugging
        io.emit('chat message', msg); // Broadcast the message to all connected clients
    });

    // Handle user disconnections
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
