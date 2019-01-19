import * as express from 'express';
import { Middleware } from './app/middlewares/middleware';
import { Route } from './routes/route';

export class App {

    public app: express.Application;
    private middleware: Middleware;
    private route: Route;

    constructor() {
        this.app =  express();
        this.config();
        this.middleware = new Middleware(this.app);
        this.route = new Route(this.app);
    }

    private config() {
        this.app.set('port', 3000);
    }
}
