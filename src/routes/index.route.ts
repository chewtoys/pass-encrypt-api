import {
    Application,
    Request,
    Response
} from 'express';

import { IndexController } from '../app/controllers/index.controller';


export class IndexRoute {

    private indexController = new IndexController();

    constructor(private app: Application) {
        this.app.route('/').get(this.indexController.index);
    }
}