/// <reference path="../typings/index.d.ts" />
import * as express from 'express';
import * as path from 'path';

export class Server{

    private _serverApp: express.Express;
    private _port: number;

    constructor(port: number){
        this._serverApp=express();
        this._port=port;    

        this._serverApp.use('/www', express.static(path.resolve(__dirname, '../client')));
        this._serverApp.get('/www', this._renderPage);

    }

    private _renderPage(req: express.Request, res: express.Response):any{
        res.sendFile('/www/index.html');
    }

    public listen(): any{
        this._serverApp.listen(this._port, ()=>{
            console.log('Server is listening on port '+this._port);
        });
    }
}