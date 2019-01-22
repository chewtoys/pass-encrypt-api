import * as http from "http"
import { Application } from 'express';

const port = 3000 || process.env.PORT;

export class Server {

    public http = http;

    constructor(private app: Application){ }

    public start(): void {
        console.log('App is starting...');
        console.log(`http://localhost:${port}`);
        this.http.createServer(this.app)
            .listen(port);
    }
}