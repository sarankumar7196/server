import express from 'express'; // import the express application
import { ObjectId } from "mongodb"; // object id

import { Request, Response, NextFunction } from 'express'; // import request, response, next function from express library
import UserRoutes from "./user/user.route";

class Routes {

    private userRoute = UserRoutes; // member to old user routes
    /**
     * @description method to initialize all the routes
     * @param app express application
     * @returns none
    */
    public routeSetup(app: express.Application): void {

        // middleware route to handle user routes
        app.use("/api/user", this.userRoute.UserRouteSetup());

    }
}

export default new Routes();