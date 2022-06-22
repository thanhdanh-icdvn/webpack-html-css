import { UserController } from './../controllers/user.controller';
import { Router } from 'express';

export const UserRouter = Router();
UserRouter.route('/').get(UserController.findAll);

UserRouter.route('/').post(UserController.create);

UserRouter.route('/:id').get(UserController.findById);

UserRouter.route('/:id').delete(UserController.deleteById);

UserRouter.route('/:id').patch(UserController.updateById);
