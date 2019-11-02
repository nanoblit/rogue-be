import _app from "express";
import _http from "http";
import _io from "socket.io";

const app = _app();
const http = _http.createServer(app);
const io = _io(http);

io.on("connection", socket => {
  console.log("a user connected");
  socket.emit("test", "hello world");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(8081, () => {
  console.log("Initialize completed, server running on port 8081");
});
