import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001";



const initSocket = (store) => {
    const socket = socketIOClient(ENDPOINT);

    socket.on('connect', () => {
        console.log("Connected!");
    });

    socket.on("value", value => {
        store.dispatch({
            type: "VALUE_CHANGED",
            payload: value
        });
    });
    
    socket.on("graph", graph => {
        store.dispatch({
            type: "GRAPH_CHANGED",
            payload: graph
        });
    });

};

export default initSocket;