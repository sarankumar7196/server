import { body } from 'express-validator'; // import query function from express validator library

// method to define common routes request rules
export const userValidateRules = (method: string): any[] => { 
    switch (method) {
        case 'userActionRule': // rule to validate fetch record list api
            return [
                
                body('user.username')
                    .notEmpty()
                    .trim()
                    .blacklist('{}'),
                body('user.email')
                    .notEmpty()
                    .isEmail(),
                body('user.phoneNo')
                    .notEmpty()
                    .trim()
                    .isNumeric(),
                body('user.membership')
                    .trim()
                    .blacklist('{}'),
                body('user.registrationCount')
                    .trim()
                    .blacklist('{}'),
                
            ];
    }
    return [];
}