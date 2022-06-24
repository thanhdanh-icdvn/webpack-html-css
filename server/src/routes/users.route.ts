import { UserController } from '../controllers/users.controller';
import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware';

export const UserRouter = Router();
UserRouter.route('/').get(verifyToken,UserController.findAll);

UserRouter.route('/:id').get(verifyToken,UserController.findById);

UserRouter.route('/:id').delete(verifyToken,UserController.deleteById);

UserRouter.route('/:id').patch(verifyToken,UserController.updateById);
