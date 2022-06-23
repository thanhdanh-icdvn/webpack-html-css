import { generateAccessToken } from './../utils/utils.generate-token';
import { Request, Response } from 'express';
import { UserModel } from './../models/user.model';
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
        const {
          password: userPassword,
          firstName,
          lastName,
          avatar,
          dob,
          email,
          bio
        } = user;
        const decryptedPassword = decrypt(userPassword);
        const validPassord = decryptedPassword === password;
        if (validPassord) {
          const tokenInput = {
            username,
            firstName,
            lastName,
            avatar,
            dob,
            email,
            bio
          };
          const token = generateAccessToken(tokenInput);
          user.token = token;
          return res.status(200).json({
            code: 200,
            message: 'Login successfully',
            data: user,
          });
        } else {
          return res.status(400).json({
            code: 400,
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