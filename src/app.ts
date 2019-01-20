import * as express from 'express';
import * as path from 'path';
import { Middleware } from './app/middlewares/middleware';
import { Route } from './routes/route';


export class App {

    private app: express.Application;
    private middleware: Middleware;

    constructor() {
        this.app =  express();
        this.config();
        this.middleware = new Middleware(this.app);
        new Route(this.app).initalizeRoutes();
    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    public getApp(): express.Application {
        return this.app;
    }
}
