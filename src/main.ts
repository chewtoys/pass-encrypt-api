import { App } from './app';
import { Server } from './server';

import './database';

const port = 3000 || process.env.PORT;
const app = new App();
const server = new Server(app.getApp());

server.start();