import { App } from './app';
import { Server } from './server';

import './config/config';
import './db/test/index';

const app = new App();
const server = new Server(app.getApp());

server.start();