
import mongoose from 'mongoose';
import { AppendCommonActionType } from '../dto/app.dto'; // import result interface

export default class CommonDao {

    static async createSingleRecord(cName: string, data: any,user: any) {
        try {

            let schemaModal = mongoose.model(cName);
            data = this.appendCommonDetails(AppendCommonActionType.new, data, user); // append common fields
            
            const dataResponse = await schemaModal.insertMany(data);

            return { "isSuccess": true, "data": dataResponse[0] }; 
        } catch (err) {
            console.log("err ====>",err)
            return { "isSuccess": false, "message": err.message };
        }
    }

    /**
     * Method: service method to append common details
     * arg1: action type [ 'new', 'update']
     * arg2: data
     * return: updated data
    */
    static appendCommonDetails(action: AppendCommonActionType, data: any, credential: any) {
        
        // check the data is an array
        if(Array.isArray(data)) {
            // iterate the data
            data.forEach((x) => {
                // check the action type
                if(action == 'new') {
                    x.createdDate = new Date() // set the created date as today
                    x.createdBy = credential._id; // set the user id as created by id
                    x.isActive =  true; // set the is active default to true
                    x.isDeleted = false; //  set the is deleted default to false
                }
                x.updatedBy = credential._id; // set the user id as last modified by id 
                x.updatedDate = new Date(); // set the updated date as today
            });
        } else {
            // check the action type
            if(action == 'new') {
                data.createdDate = new Date() // set the created date as today
                data.createdBy = credential._id; // set the user id as created by id
                data.isActive =  true; // set the is active default to true
                data.isDeleted = false; //  set the is deleted default to false
            }
            data.updatedBy = credential._id; // set the user id as last modified by id 
            data.updatedDate = new Date(); // set the updated date as today
        }
        return data;
    }
   
   
}