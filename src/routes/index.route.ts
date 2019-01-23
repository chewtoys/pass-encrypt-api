import { Application, Request, Response, Router } from 'express';
import { IndexController } from '../app/controllers/index.controller';
import { IRoute } from '../core/route-base';

export class IndexRoute implements IRoute {

    route: Router;
    private indexController: IndexController;

    constructor() {
        this.route = Router();
        this.indexController = new IndexController();
        this.defineRoutes();
    }

    private defineRoutes() {
        this.route.get('/', this.indexController.index);
    }

    public getRoute(): Router {
        return this.route;
    }
}