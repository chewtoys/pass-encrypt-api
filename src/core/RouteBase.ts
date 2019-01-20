import { Application, Router } from 'express';

export type uriType = 
    | '/'
    | '/api';

export interface IRoute {
    route: Router;
    getRoute(): Router;
}

export class BaseRoute {
    routes: IRoute[] = [];
    uriType: uriType = '/';

    constructor(private app: Application) {}
    
    registerRoute(route: IRoute) {
        this.routes.push(route);
    }

    initalizeRoutes() {
        this.routes.forEach(route => {
            this.app.use(this.uriType, route.getRoute());
        })
    }
}
