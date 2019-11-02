"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = __importDefault(require("socket.io"));
var app = express_1.default();
var http = http_1.default.createServer(app);
var io = socket_io_1.default(http);
console.log("test");
io.on("connection", function (socket) {
    console.log("a user connected");
    socket.emit("test", "hello world");
    socket.on("disconnect", function () {
        console.log("user disconnected");
    });
});
http.listen(8081, function () {
    console.log("Initialize completed, server running on port 8081");
});
//# sourceMappingURL=index.js.map