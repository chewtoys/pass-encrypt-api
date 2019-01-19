import { Application } from "express";
import * as morgan from 'morgan';

export class Middleware {

    constructor(private app: Application) { 
        this.app.use(morgan('dev'));
    }

    /*public init() {
        this.app.use(morgan('dev'));
    }*/
}