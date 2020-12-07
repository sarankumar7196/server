
import { Request, Response, NextFunction } from 'express';
import ForgotPasswordService from './forgot-password.service';

export default class ForgotPasswordController {

    public static async checkEmailController(req: Request, res: Response, next: NextFunction) {
        res.json(await ForgotPasswordService.checkEmailService(req.params.emailId));
    }

    public static async updateUserPasswordController(req: Request, res: Response, next: NextFunction) {
        res.json(await ForgotPasswordService.checkEmailService(req.body));
    }
}
