import Contact from "./contact.model";

export default class ContactDao {

    static async saveContact(data: any) {
        try {
            const contactResult: any = await Contact.create(data);
            return { "isSuccess": true, "data": contactResult };
        } catch (err) {
            console.log("err",err)
            return { "isSuccess": false, "message": err.message };
        }
    }
   
   
}