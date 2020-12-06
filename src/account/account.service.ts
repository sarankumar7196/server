
import AccountDao from "./account.dao";
import ContactDao from "../contact/contact.dao"

export default class AccountService { 
  
    public async saveAccountService(AccountDetails: any,ContactDetails: any) {
        try {

            const accountResult: any = await AccountDao.saveAccount(AccountDetails,);

            if (!accountResult.isSuccess || !accountResult.data) {
             return accountResult;
            }


           const contact = ContactDetails;

           contact['account'] = accountResult.data._id;
           contact['createdBy'] = AccountDetails.createdBy;
           contact['lastModifiedBy'] = AccountDetails.createdBy;
            
            const contactResult: any = await ContactDao.saveContact(contact);

            if (!contactResult.isSuccess || !contactResult.data) {
                return contactResult;
            }

            return { "isSuccess": true, "data": accountResult };
        } catch(err) {
            return { "isSuccess": false, "message": 'Unable to save record' };
        }
    }

}