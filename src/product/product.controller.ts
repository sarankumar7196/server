import { Request,  Response, NextFunction } from 'express';
import ProductService from './product.service';

export default class ProductCtrl {
    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    public async createProduct (req: Request, res: Response,  next: NextFunction) {
        const service = new ProductCtrl().productService;
        
        const response: any = await service.createProductService(req.body);

        if(response.isSuccess) {
            res.json({ "isSuccess" : true, "data": response.data });
        } else {
            res.json(response);
        }
    }     
    
}
