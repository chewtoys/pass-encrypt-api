import { BaseRoute, IRoute } from '../core/route-base';
import { Application } from 'express';

import { IndexRoute } from './index.route';


export class APIRotue extends BaseRoute {

    constructor() {
        super();
        this.uriType = '/api';
    }

    defineRoutes() {
        this.registerRoute(new IndexRoute());
    }
}