import { Router } from "express";
import { addUser, deleteUserById, getUserById, getUsers, login, updateUserById } from "./users.controller";


const userRouter = Router();
userRouter
  .route("/")
  .get(getUsers);

userRouter
  .route('/:id')
  .get(
    getUserById
  );

userRouter
  .route('/')
  .post(
    addUser
  );

userRouter
  .route('/:id')
  .patch(
    updateUserById
  );

userRouter
  .route('/:id')
  .delete(
    deleteUserById
  );
userRouter
  .route('/login')
  .post(
    login
  );
export default userRouter;