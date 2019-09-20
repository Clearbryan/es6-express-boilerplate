import express from 'express';

export class Router {
    router = express.Router();
    payload = '';
    constructor() { }

    // get register page
    registerUSer() {
        return this.router.post('/register', (req, res, next) => {
            res.writeHead(200, 'Request Successfull', {Success: 'ok'});
            res.end('Visit user registration page...');
        })
    }

    // get homepage
    getHomePage() {
        return this.router.get('/', (req, res, next) => {
            res.writeHead(200, 'Request Successfull', {Success: 'ok'})
            res.end( 'Welcome to the homepage' );
        });
    }
}
