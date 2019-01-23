import * as express from 'express';
import { Middleware } from './app/middlewares/middleware';
import { APIRotue } from './routes/api';
import { WebRotue } from './routes/web';


export class App {

    private app: express.Application;
    private middleware: Middleware;

    constructor() {
        this.app =  express();
        this.config();
        this.middleware = new Middleware(this.app);
        new WebRotue().initalizeRoutes(this.app);
        new APIRotue().initalizeRoutes(this.app);
    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    public getApp(): express.Application {
        return this.app;
    }
}
