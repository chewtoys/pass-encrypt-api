import { Request, Response } from 'express';
import db from '../../db/test/index';

export class IndexController {
    
    public index(req: Request, res: Response) {
        res.status(200).send({
            message: 'Hello world'
        });
    }
}