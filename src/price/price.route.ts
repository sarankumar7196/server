import { Router} from 'express';
import PriceCtrl from './price.controller';
class PriceRoutes {
    private priceCtrl: PriceCtrl;

    constructor() {
        this.priceCtrl = new PriceCtrl();
    }

    public priceRouteSetup(router: Router): Router {
        
        let priceController: PriceCtrl = new PriceRoutes().priceCtrl;

        router.post('/createPrice', priceController.createPrice);

        return router;
    }
}
export default new PriceRoutes();