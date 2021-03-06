import { v4 } from 'uuid';
import passport from 'passport';
import { UserModel } from './../models/users.model';
import { generateAccessToken } from './../utils/utils.generate-token';
import { Request, Response } from 'express';
import { decrypt, encrypt } from '../utils/utils.encode';
import { log } from '../server';
/**
 * Authencation controller
 */
export class AuthController {

  /**
   *
   * @param req Function to insert user into db
   * @param res
   * @returns
   */
   static async registerUser(req: Request, res: Response) {
    const id = v4();
    const { body } = req;
    const { password } = body;
    const hashedPassword: string = encrypt(password);
    try {
      const token = generateAccessToken(id);
      const user = new UserModel({
        ...body,
        id,
        password: hashedPassword,
        token,
      });
      await user.save();
      res.cookie('token', token, { httpOnly: true });
      return res.status(201).json({
        code: 201,
        message: 'User created successfully',
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        message: error
      });
    }
  }

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
          id
        } = user;
        const decryptedPassword = decrypt(userPassword);
        const validPassord = decryptedPassword === password;
        if (validPassord) {
          const tokenInput = {
            id
          };
          const token = generateAccessToken(tokenInput);
          user.token = token;
          res.cookie('token', token, { httpOnly: true });
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

  static async loginWithGoogle(req:Request,res:Response){
    try {
      const authenticateResult = await  passport.authenticate('google', {
        scope: ['openid','profile', 'email']
      });
      log.info(authenticateResult)
      return res.status(200).json({
        code:200,
        message:authenticateResult
      })
    } catch (error) {
      return res.status(500).json({
        code:500,
        message:'Server error. '+error
      })
    }
  }
}