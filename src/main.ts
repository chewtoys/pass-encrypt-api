import { App } from './app';
import { Server } from './server';

const app = new App().app;
const server = new Server(app);

server.start();