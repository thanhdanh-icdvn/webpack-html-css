import { encrypt } from './../utils/utils.encode';
import { Request, Response } from 'express';
import { IUser } from '../interfaces/users.interface';
import { UserModel } from '../models/users.model';
/**
 * User controller CRUD
 */
export class UserController {
  /**
   * Function get all user
   * @param req
   * @param res
   * @returns
   */
  static async findAll(req: Request, res: Response) {
    try {
      const user = await UserModel.find({ isActive: true });
      if (!user) {
        return res.status(404).json({
          code: 404,
          message: 'User not found'
        });
      } else {
        return res.status(200).json(user);
      }
    } catch (error) {
      res.json({
        code: 500,
        message: error
      });
    }
  }
  /**
   * Function find user by Id
   * @param req
   * @param res
   * @returns
   */
  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await UserModel.findOne({ id, isActive: true });
      if (!user) {
        return res.status(404).json({
          code: 404,
          message: 'User not found'
        });
      } else {
        return res.status(200).json(user);
      }
    } catch (error) {
      res.json({
        code: 500,
        message: error
      });
    }
  }
  /**
   * Function delete user by Id
   * @author thanhd
   * @param req
   * @param res
   * @returns
   */
  static async deleteById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await UserModel.find({ id, isActive: true });
      if (user.length < 1) {
        return res.status(404).json({
          code: 404,
          message: 'User not found'
        });
      } else {
        try {
          await UserModel.deleteOne({ id });
          const deletedCount = await UserModel.countDocuments({ id });
          if (deletedCount === 0) {
            return res.status(200).json({
              code: 200,
              message: 'User deleted successfully with id:' + id
            });
          } else {
            return res.status(202).json({
              code: 202,
              message: 'User deleted failed with id:' + id
            });
          }
        } catch (error) {
          return res.status(404).json({
            code: 404,
            message: error
          });
        }
      }
    } catch (error) {
      res.json({
        code: 500,
        message: error
      });
    }
  }
  /**
   * Function update user by id
   * @param req
   * @param res
   * @returns
   */
  static async updateById(req: Request<Partial<IUser>>, res: Response) {
    const { id } = req.params;
    const { password, ...updateInfo } = req.body;

    try {
      const userToUpdated = password ? await UserModel.updateOne({ id }, { password: encrypt(password), updateInfo }):
        await UserModel.updateOne({ id }, { updateInfo });
      if (userToUpdated.modifiedCount === 1) {
        const userUpdated = await UserModel.find({ id });
        return res.status(200).json({
          code: 200,
          data: userUpdated
        });
      } else {
        return res.status(500).json({
          code: 200,
          message: 'Update user failed'
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        meassage: error
      });
    }
  }
}
