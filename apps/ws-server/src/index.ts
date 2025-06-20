import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
    port: 3002
});

server.on("connection", async (socket) => {
    const res = await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("Hi there you are connected to the server");
    socket.send("User created - "+res.id);
})
