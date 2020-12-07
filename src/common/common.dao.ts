
import mongoose from 'mongoose';

export default class CommonDao {

    static async createSingleRecord(cName: string, data: any) {
        try {

            let schemaModal = mongoose.model(cName);

            const dataResponse = (await schemaModal.insertOne(data)).ops;

            return { "isSuccess": true, "data": dataResponse[0] }; 
        } catch(err) {
            return { "isSuccess": false, "message": err.message };
        }
    }
   
   
}