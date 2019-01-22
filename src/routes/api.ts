import { BaseRoute, IRoute } from '../core/route-base';
import { Application } from 'express';

import { IndexRoute } from './index.route';


export class APIRotue extends BaseRoute {

    constructor(app: Application) {
        super(app);
        this.uriType = '/api';
        this.registerRoute(new IndexRoute());
    }
}