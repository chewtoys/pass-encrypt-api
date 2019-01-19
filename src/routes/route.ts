import {
    Application,
    Request,
    Response
} from 'express';
import { IndexRoute } from './index.route';


export class Route {

    constructor(private app: Application) {
        new IndexRoute(this.app);
    }
}