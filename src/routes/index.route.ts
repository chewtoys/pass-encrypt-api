import { Application, Request, Response, Router } from 'express';
import { IndexController } from '../app/controllers/index.controller';
import { IRoute } from '../core/RouteBase';

export class IndexRoute implements IRoute {

    route: Router;
    baseUrl: string;
    private indexController: IndexController;

    constructor() {
        this.route = Router();
        this.baseUrl = '/';
        this.indexController = new IndexController();
        this.defineRoutes();
    }

    private defineRoutes() {
        this.route.get(this.baseUrl, this.indexController.index);
    }

    public getRoute(): Router {
        return this.route;
    }
}