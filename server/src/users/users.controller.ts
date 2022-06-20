import CryptoJS from 'crypto-js';
import { RequestHandler, Response } from 'express';
import { IAddUserReq, ILoginUserReq, IUser } from './users.model';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv';
const PASSWORD_KEY: string = process.env.PASSWORD_SECRET + '';
export const encrypt = (content: string, secret: string=PASSWORD_KEY) => CryptoJS.AES.encrypt(JSON.stringify({ content }), secret).toString();
export const decrypt = (crypted: string, secret: string=PASSWORD_KEY) => JSON.parse(CryptoJS.AES.decrypt(crypted, secret).toString(CryptoJS.enc.Utf8)).content;

export let USERS: IUser[] = [
  {
    id: "6e1aa598-a125-4628-b12c-0c907bfcc6e9",
    username: "admin",
    firstName: "Thanh",
    lastName: "Danh",
    avatar: "",
    dob: new Date("1995-11-19"),
    email: "thanhdanh@icd-vn.com",
    bio: "",
    isActive: true,
    hashedPassword: encrypt('admin', PASSWORD_KEY)
  },
  {
    id: "573294c8-c6f8-4f51-abac-99491d026afa",
    username: "editor",
    firstName: "Luận",
    lastName: "Nguyễn Văn",
    avatar: "",
    dob: new Date("1995-11-19"),
    email: "",
    bio: "",
    isActive: true,
    hashedPassword: encrypt('luannv', PASSWORD_KEY)
  },
  {
    id: "92ccb972-9b47-4b0b-9fc4-bd7ccff0f2b2",
    username: "hoadlp",
    firstName: "Hoa",
    lastName: "Đào Lê Phương Hoa",
    avatar: "",
    dob: new Date("1999-06-21"),
    email: "hoadlp@icd-vn.com",
    bio: "No bio",
    isActive: true,
    hashedPassword: encrypt('hoadlp', PASSWORD_KEY)
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
  const user = USERS.find((user) => user.id === req.params.id && user.isActive);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({
      code: 404,
      message: "User not found or deactivated"
    })
  }
};
/**
 * Get user record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getUserByUsername: RequestHandler = (req: IGetUserReq, res: Response) => {
  const user = USERS.find((user) => user.username === req.params.username && user.isActive);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({
      code: 404,
      message: "User not found or deactivated"
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
  const id = uuidv4();
  const {password} = req.body;
  const hashedPassword = encrypt(password);
  const newUser: IUser = {
    ...req.body,
    id,
    isActive: true,
    hashedPassword,
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
  let currentUser = USERS.find((user) => user.id === req.params.id && user.isActive);
  if (!Object.keys(req.body).length) {
    res.status(500).json({
      code: 500,
      message: "Missing param to update user.Please check in body"
    })
    return;
  }
  if (currentUser) {
    USERS.map(user => user.id === req.params.id ? { ...currentUser, ...req.body } : user)
    return res.status(201).json(USERS);
  } else {
    return res.status(404).json({
      code: 404,
      message: "User not found or deactivated"
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
  const userIndex = USERS.findIndex((user) => user.id === req.params.id && user.isActive);
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

export const login: RequestHandler = (req: ILoginUserReq, res: Response) => {
  const { password, username } = req.body;
  const currentUser = USERS.find(user => user.username === username && user.isActive);
  if (currentUser) {
    const decryptedPassword = decrypt(currentUser.hashedPassword, PASSWORD_KEY)
    console.log(decryptedPassword, password);
    const validPassord = decryptedPassword === password;
    if (validPassord) {
      res.status(200).json({
        code: 200,
        message: "Login successful"
      })
    } else {
      res.status(500).json({
        code: 500,
        message: "Login error. Check password or username"
      })
    }
  } else {
    res.status(404).json({
      code: 404,
      message: "User not found"
    })
  }
}
