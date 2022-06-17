
import { RequestHandler, Response } from 'express';
import { IAddUserReq, IUser } from './users.model';
const USERS: IUser[] = [
  {
    id: 1,
    username: "admin",
    firstName: "Thanh",
    lastName: "Danh",
    avatar: "",
    dob: new Date("1995-11-19"),
    email: "thanhdanh@icd-vn.com",
    bio: "",
    isActive: true
  },
  {
    id: 2,
    username: "editor",
    firstName: "A",
    lastName: "Nguyễn Văn",
    avatar: "",
    dob: new Date("1995-11-19"),
    email: "",
    bio: "",
    isActive: true
  }
]
/**
 * Get user records
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getUsers: RequestHandler = (req: Request, res: Response) => {
  res.json(USERS);
};
/**
 * Get user record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getUserById: RequestHandler = (req: IGetUserReq, res: Response) => {
  const user = USERS.find((user) => user.id === +req.params.id && user.isActive);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({
      code: 404,
      message: "User not found or is deactivated"
    })
  }
};

/**
 * Inserts a new user record based
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addUser: RequestHandler = (req: IAddUserReq, res: Response) => {
  const lastUserIndex = USERS.length - 1;
  const lastId = USERS[lastUserIndex].id;
  const id = lastId + 1;
  const newUser: IUser = {
    ...req.body,
    id,
    isActive: true
  };

  USERS.push(newUser);

  res.json(newUser);
};

/**
 * Updates existing user record
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const updateUserById: RequestHandler = (req: IUpdateUserReq, res: Response) => {
  let currentUser = USERS.find((user) => user.id === +req.params.id && user.isActive);
  let userUpdated = currentUser;
  const {
    firstName,
    lastName,
    dob,
    email,
    avatar,
    isActive,
    bio
  } = req.body;

  if (currentUser) {
    userUpdated = {
      ...currentUser,
      firstName,
      lastName,
      dob,
      email,
      avatar,
      isActive,
      bio
    };
    return res.status(201).json(userUpdated);
  } else {
    return res.status(404).json({
      code: 404,
      message: "User not found or is deactivated"
    });
  }
};

/**
 * deletes a user
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const deleteUserById: RequestHandler = (req: IDeleteUserReq, res: Response) => {
  const userIndex = USERS.findIndex((user) => user.id === +req.params.id && user.isActive);
  if (userIndex >= 0) {
    USERS.splice(userIndex, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({
      code: 404,
      message: "User not found"
    })
  }
};
