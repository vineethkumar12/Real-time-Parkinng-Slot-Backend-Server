const WebSocket = require("ws");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 4000 });
// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    // console.log("IT IS GETTING INSIDE CLIENTS");
    //   console.log(client);

    // The data is coming in correctly
    //   console.log(data);
    client.send(data);
  });
};

// Event listener for when a client connects
wss.on("connection", function connection(ws) {
  console.log("A client connected");

  // Create a JSON object to send
  const data = {
    Slot1: [
      { slotName: "A", isParked: false },
      { slotName: "B", isParked: true },
      { slotName: "C", isParked: true },
      { slotName: "D", isParked: false },
      { slotName: "E", isParked: true },
      { slotName: "F", isParked: false },
      { slotName: "G", isParked: true },
    ],
    Slot2: [
      { slotName: "H", isParked: false },
      { slotName: "I", isParked: true },
      { slotName: "J", isParked: false },
      { slotName: "K", isParked: true },
      { slotName: "L", isParked: false },
      { slotName: "M", isParked: false },
    ],
    TotalSlots: 13,
    AvailableSlots: 10,
    ParkedSlots: 3,
  };

  // Event listener for incoming messages from clients
  ws.on("message", function incoming(message) {
    console.log("Received message:", message);

    // Parse the received message (assuming it's JSON)
    const receivedData = JSON.parse(message);

    // You can now process the received data as needed
    console.log("Received data:", receivedData);
    wss.broadcast(JSON.stringify(receivedData));
  });
  // Convert the JSON object to a string and send it to the client
  wss.broadcast(JSON.stringify(data));
  // ws.send(JSON.stringify(data));
});
