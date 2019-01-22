import * as dotenv from 'dotenv';
import { environment } from '../config/enviroment';

dotenv.config();
let path;
switch (environment.status) {
    case "test":
        path = `${__dirname}/../../.env.test`;
        break;
    case "production":
        path = `${__dirname}/../../.env.production`;
        break;
    default:
        path = `${__dirname}/../../.env.development`;
}
dotenv.config({
    path: path
});

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const PORT = process.env.PORT;