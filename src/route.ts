// import express from 'express'; // import the express application
// import UserRoutes from "./user/user.route";
// import LoginRoutes from "./login/login.route";


// class Routes {

//     private userRoute = UserRoutes; // member to old user routes
//     private authenticateRoute = LoginRoutes; // member to old user routes
    
//     /**
//      * @description method to initialize all the routes
//      * @param app express application
//      * @returns none
//     */
//     public routeSetup(app: express.Application): void {

//         // middleware route to handle user routes
//         app.use("/api/user", this.userRoute.UserRouteSetup());
//         // middleware route to handle authenticateRoute routes
//         app.use("/api/user", this.authenticateRoute.authRouteSetup());

//     }
// }

// export default new Routes();
import express from 'express';
import UserRoutes from "./user/user.route";
import LoginRoutes from "./login/login.route";
class Routes {
    private app: express.Application;
    private router;
    private userRoute = UserRoutes; // member to old user routes
    private authenticateRoute = LoginRoutes; // member to old user routes
    

    constructor() {
        this.app = express(); 
        this.router = express.Router();
    }

    public routeSetup(app: express.Application): void {
        app.use('/api/auth', this.authenticateRoute.authRouteSetup(this.router));
        app.use("/api/user", this.userRoute.userRouteSetup(this.router));
        
    }
} 

export default new Routes();