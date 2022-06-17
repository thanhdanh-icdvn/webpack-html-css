import { Router } from "express";
import { addUser, deleteUserById, getUserById, getUsers, updateUserById } from "./users.controller";


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

export default userRouter;