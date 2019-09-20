import express from 'express';
import cors from 'cors';
import cookieParser from 'cookieParser';
import { Router } from './router';

export class App {
    server = express();
    router = new Router();
    constructor(){

        // middleware
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(express.urlencoded( {extended: false} ));
        this.server.use(cookieParser());

        // application routes
        this.server.use('/',
            this.router.getHomePage(),
            this.router.registerUSer()
        );
        // start application server
        this.server.listen(3000, () => {
            console.log('Server running...');
        });
    }
}
