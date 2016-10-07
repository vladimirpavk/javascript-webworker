"use strict";
/// <reference path="../typings/index.d.ts" />
const express = require('express');
const path = require('path');
class Server {
    constructor(port) {
        this._serverApp = express();
        this._port = port;
        this._serverApp.use('/www', express.static(path.resolve(__dirname, '../client')));
        this._serverApp.get('/www', this._renderPage);
    }
    _renderPage(req, res) {
        res.sendFile('/www/index.html');
    }
    listen() {
        this._serverApp.listen(this._port, () => {
            console.log('Server is listening on port ' + this._port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map