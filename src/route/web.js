import express from 'express';
import homeController from '../controllers/homeController'

let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/home', homeController.getHomepage);

    return app.use("/", router);
}

module.exports = initWebRoutes;