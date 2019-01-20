import { BaseRoute, IRoute } from '../core/RouteBase';
import { Application } from 'express';

import { IndexRoute } from './index.route';


export class Route extends BaseRoute {

    constructor(app: Application) {
        super(app);
        this.registerRoute(new IndexRoute());
    }
}