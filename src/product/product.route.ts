import { Router} from 'express';
import ProductCtrl from './product.controller';

class ProductRoutes {
    private productCtrl: ProductCtrl;

    constructor() {
        this.productCtrl = new ProductCtrl();
    }

    public productRouteSetup(router: Router): Router {
        
        let productController: ProductCtrl = new ProductRoutes().productCtrl;

        router.post('/createProduct', productController.createProduct);

        return router;
    }
}
export default new ProductRoutes();