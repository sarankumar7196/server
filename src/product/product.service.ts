import ProductInterface from "./product.interface";
import CommonDao from "../common/common.dao"

export default class ProductService {

    public async createProductService(productInfo: any,userDetails: any) {
        try {
            const result: any = await CommonDao.createSingleRecord('Product', productInfo, userDetails);
            return result;
        }
        catch (err) {
            console.log("err",err)
        }
        
    } 
}