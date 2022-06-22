import { UserModel } from './../models/user.model';
import { NextFunction, Request, Response } from 'express';
import { decrypt } from '../utils/utils.encode';

/**
 * Authencation controller
 */
export class AuthController {
  /**
   * Login method
   * @param req
   * @param res
   * @returns
   */
  static async login(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const user = await UserModel.findOne({ username, isActive: true });
      if (!user) {
        return res.status(404).json({
          code: 404,
          message: 'User not found'
        });
      } else {
        const { hashedPassword } = user;
        const decryptedPassword = decrypt(hashedPassword);
        const validPassord = decryptedPassword === password;
        if (validPassord) {
          return res.status(200).json({
            code: 200,
            message: 'Login successfully'
          });
        } else {
          return res.status(404).json({
            code: 404,
            message: 'Username or password is incorrect'
          });
        }
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        message: 'Server error. ' + error
      });
    }
  }
}