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
    uriType: uriType = '/'
    
    registerRoute(route: IRoute) {
        this.routes.push(route);
    }

    defineRoutes() { }

    initalizeRoutes(app: Application) {
        this.defineRoutes();
        this.routes.forEach(route => {
            app.use(this.uriType, route.getRoute());
        })
    }
}
