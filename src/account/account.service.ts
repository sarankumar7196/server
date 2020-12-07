
import AccountDao from "./account.dao";
import ContactDao from "../contact/contact.dao"

export default class AccountService { 
  
    public async saveAccountService(AccountDetails: any) {
        try {

            const accountResult: any = await AccountDao.saveAccount(AccountDetails);

            return accountResult;
            
        } catch(err) {
            return { "isSuccess": false, "message": 'Unable to save record' };
        }
    }

}