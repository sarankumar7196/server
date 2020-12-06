import { Request, Response, NextFunction } from 'express'; // import Router, Request, NextFunction from express library
import { query, validationResult } from 'express-validator'; // import query function from express validator library

// method to define common routes request rules
export const commonValidateRules = (method: string): any[] => { 
    switch (method) {
        case 'fetchRecordListRule': // rule to validate fetch record list api
            return [
                query('cName').notEmpty().trim().escape().blacklist('{}'),
                query('view').notEmpty().trim().isIn([ 'setup', 'ui' ]),
                query('sub_view')
                    .notEmpty()
                    .trim()
                    .isIn([
                        'rel_object_select', 
                        'exist_pg_list',
                        'exist_rec_type_list',
                        'obj_view_recType_list', 
                        'obj_view_btn_list', 
                        'other'
                    ]),
                query('param')
                    .optional()
                    .trim()
                    .escape()
                    .blacklist('{}')
                    .isString(),
                query('value').optional().trim().escape().blacklist('{}'),
                query('obj_val').optional().isBoolean(),
                query('projection')
                    .optional()
                    .trim()
                    .escape()
                    .blacklist('{}')
                    .isString()
            ]
    }
    return [];
}


export const commonValidate = (req: Request, res: Response, next: NextFunction): any => {
    const errors = validationResult(req); // validate the request by calling the validation result in the express validator library
    
    // check validation result method contains any error, 
    if(errors.isEmpty()) {
        return next(); // proceed to the next process if request is valid
    }
    
    // if error found in the request return the response
    return res.status(422).send({ "isSuccess": false, "message": "Invalid API" });

};