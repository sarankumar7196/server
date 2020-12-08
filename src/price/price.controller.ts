import { Request,  Response, NextFunction } from 'express';
import PriceService from './price.service';

export default class PriceCtrl {
    private priceService: PriceService;

    constructor() {
        this.priceService = new PriceService();
    }

    public async createPrice(req: Request, res: Response, next: NextFunction) {
        
        const service = new PriceCtrl().priceService;
        
        const response: any = await service.createPriceService(req.body,req['user']);

        if(response.isSuccess) {
            res.json({ "isSuccess" : true, "data": response.data });
        } else {
            res.json(response);
        }
    }     
    
}
