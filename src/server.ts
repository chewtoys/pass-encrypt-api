import * as http from "http"
import { Application } from 'express';
import { PORT } from './utils/config';

export class Server {

    public http = http;

    constructor(private app: Application){ }

    public start(): void {
        console.log('App is starting...');
        console.log(`http://localhost:${PORT}`);
        this.http.createServer(this.app)
            .listen(PORT);
    }
}