import { firebaseApp } from './../server';
import { Request, Response } from 'express';
/**
 * Create user by email and password in firebase
 * @param req
 * @param res
 * @returns
 */
export const firebaseRegisterWithEmailAndPassword = async (req:Request,res:Response)=>{
  try {
    const auth  = await getAuth(firebaseApp);
    const {email,password} = req.body;
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    if(userCredential){
      const user = userCredential.user;
      log.info(user);
      return res.status(200).json({
        code:200,
        message:'Register user by email successfully into firebase',
        data:user
      })
    }
  } catch (error) {
    if(error instanceof FirebaseError){
      log.error(error);
      return res.status(400).json({
        code:400,
        message:error.message
      })
    }else{
      return res.status(500).json({
        code:500,
        message:'Server error. '+error
      })
    }
  }
}
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { log } from '../server';
import { FirebaseError } from 'firebase/app';
/**
 * Firebase login by email and password
 * @param req
 * @param res
 * @returns
 */
export const firebaseLoginWithEmailAndPassword =async (req:Request,res:Response)=> {
 try {
  const {email,password} = req.body;
  const auth  = await getAuth(firebaseApp);
  const userCredential = await signInWithEmailAndPassword(auth,email,password);
  if(userCredential){
    const user = userCredential.user;
    log.info(user);
    return res.status(200).json({
      code:200,
      message:'Login user by email successfully into firebase',
      data:user
    })
  }
 } catch (error) {
  log.error(error);
  if(error instanceof FirebaseError){
    return res.status(400).json({
      code:400,
      message:error.message
    })
  }else{
    return res.status(500).json({
      code:500,
      message:'Server error. '+error
    })
  }
 }
}
