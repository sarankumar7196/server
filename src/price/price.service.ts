import CommonDao from "../common/common.dao"
export default class PriceService {

    public async createPriceService(priceInfo: any,userDetails: any) {
        try {
            const result: any = await CommonDao.createSingleRecord('Price', priceInfo, userDetails);
            return result;
        }
        catch (err) {
            console.log("err", err);
            return { "isSuccess": false, "message": err.message };
        }
        
    } 
}