import { firebaseApp } from './../server';
import { Request, Response } from 'express';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { log } from '../server';
/**
 * Firebase login by email and password
 * @param req
 * @param res
 * @returns
 */
export const firebaseLoginByEmailAndPassword =async (req:Request,res:Response)=> {
 try {
  const {email,password} = req.body;
  const auth  = await getAuth(firebaseApp);
  const userCredential = await signInWithEmailAndPassword(auth,email,password);
  if(userCredential){
    const user = userCredential.user;
    log.info(user);
    return res.status(200).json({
      code:200,
      data:user
    })
  }
 } catch (error) {
  log.error(error);
  return res.status(400).json({
    code:400,
    message:error
  })
 }
}