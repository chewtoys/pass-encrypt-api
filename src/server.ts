import * as http from "http"
import { Application } from 'express';
import { App } from "./app";

const appConfig = require('./config/app.json');


export class Server {

    public http = http;

    constructor(private app: Application, private port?: number){
        if(!port) {
            this.port = appConfig.port;
        }
    }

    public start(): void {
        console.log('App is starting...');
        console.log(`http://localhost:${this.port}`);
        this.http.createServer(this.app)
            .listen(this.port);
    }
}