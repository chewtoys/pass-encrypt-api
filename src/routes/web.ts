import { BaseRoute, IRoute } from '../core/route-base';
import { Application } from 'express';

import { IndexRoute } from './index.route';


export class WebRotue extends BaseRoute {

    defineRoutes() {
        this.registerRoute(new IndexRoute());
    }
}