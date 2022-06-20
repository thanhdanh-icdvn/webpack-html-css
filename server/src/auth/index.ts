import { Router } from 'express';
import { login } from '../users/users.controller';

const authRouter = Router();

authRouter.route("/login").post(
  login
)
export default authRouter;