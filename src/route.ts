
// export default new Routes();
import express from 'express';
import UserRoutes from "./user/user.route";
import LoginRoutes from "./login/login.route";
import ForgotPasswordRoutes from "./forgot-password/forgot-password.route";
import ProductRoutes from "./product/product.route";

class Routes {
    private app: express.Application;
    private router;
    private userRoute = UserRoutes; // member to old user routes
    private authenticateRoute = LoginRoutes; // member to old user routes
    private forgotPasswordRoute = ForgotPasswordRoutes; 
    private productRoute = ProductRoutes

    constructor() {
        this.app = express(); 
        this.router = express.Router();
    }

    public routeSetup(app: express.Application): void {
        app.use('/api/auth', this.authenticateRoute.authRouteSetup(this.router));
        app.use("/api/user", this.userRoute.userRouteSetup(this.router));
        app.use("/api/forgot-password", this.forgotPasswordRoute.forgotPasswordRouteSetup(this.router));
        app.use("/api/productRoute", this.productRoute.productSetup(this.router));
        
    }
} 

export default new Routes();