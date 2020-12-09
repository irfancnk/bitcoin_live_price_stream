// PACKAGES
const server = require('http').createServer();
const io = require('socket.io')(server,  { cors: { origin: '*' }});
// MODULES
const RedisFetcher = require('./redisFetcher').RedisFetcher;
const port = 4001;

const redisFetcher = new RedisFetcher();

server.listen(port, function(err) {
    if (err) { console.warn(err); }
    console.log('Socket listening on Port :', port);
});


io.on('connection', (client) => {    
    console.log("Client connected");

    client.on('disconnect', () => {
        console.log("Client disconnected");
    });

    client.on("customEvent", () => {
        console.log("custom event");
    });

    const sendValueCallback = (value) => {
        client.emit("value", value);
    };

    const sendGraphCallback = (graph) => {
        client.emit("graph", graph);
    };

    redisFetcher.setupEvents(sendValueCallback, sendGraphCallback);

});

redisFetcher.startFetching();
