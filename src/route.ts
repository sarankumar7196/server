import express from 'express';
import UserRoutes from "./user/user.route";
import LoginRoutes from "./login/login.route";
import ForgotPasswordRoutes from "./forgot-password/forgot-password.route";
import ProductRoutes from "./product/product.route";
import PriceRoutes from "./price/price.route";

import Configuration from './authenticate/authenticate.controller';
class Routes {
    private app: express.Application;
    private router;
    private userRoute = UserRoutes; 
    private authenticateRoute = LoginRoutes; 
    private forgotPasswordRoute = ForgotPasswordRoutes; 
    private productRoute = ProductRoutes;
    private priceRoute = PriceRoutes;
    private configuration = Configuration; 


    constructor() {
        this.app = express(); 
        this.router = express.Router();
    }

    public routeSetup(app: express.Application): void {

        app.use('/auth', this.authenticateRoute.authRouteSetup(this.router));
        app.use("/user", this.userRoute.userRouteSetup(this.router));
        app.use("/forgot-password", this.forgotPasswordRoute.forgotPasswordRouteSetup(this.router));
        app.use('/', this.configuration.authorize);
        app.use("/product", this.productRoute.productRouteSetup(this.router));
        app.use("/price", this.priceRoute.priceRouteSetup(this.router));
        
    }
} 

export default new Routes();