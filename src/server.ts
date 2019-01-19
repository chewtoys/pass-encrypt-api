import * as http from "http"
import { Application } from 'express';

export class Server {

    public http = http;

    constructor(public app: Application){ }

    public start(): void {
        console.log('App is starting...');
        console.log('http://localhost:' + this.app.get('port'));
        this.http.createServer(this.app)
            .listen(this.app.get('port'));
    }
}