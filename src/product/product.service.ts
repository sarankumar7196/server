import ProductInterface from "./product.interface";
import CommonDao from "../common/common.dao"

export default class ProductService {

    public async createProductService(productInfo: any) {
        try {
            
          let ss =  await CommonDao.createSingleRecord('Product', productInfo);
          return 
        }
        catch (err) {
            console.log("err",err)
        }
        
    } 
}