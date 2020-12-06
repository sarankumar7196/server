import Account from "./account.model";

export default class AccountDao {

    static async saveAccount(data: any) {
        try {
            const accountResult: any = await Account.create(data);
            return { "isSuccess": true, "data": accountResult };
        } catch (err) {
            console.log("err",err)
            return { "isSuccess": false, "message": err.message };
        }
    }
   
   
}