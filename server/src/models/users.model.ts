import { model, Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { IUser } from '../interfaces/users.interface';
const UserSchema = new Schema<IUser>({
  id: {
    type: String,
    unique: true,
    required: [true, 'Id is required'],
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required']
  },
  dob: {
    type: Date,
    required: [true, 'Day of birth is required']
  },
  email: {
    type: String,
    match: /.+@.+\..+/,
    unique: true,
    required: [true, 'Email is required']
  },
  avatar: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: true
  },
  bio: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  token:{
    type:String,
    required:true,
    default:null
  },
  provider:{
    type:String,
    required:true,
    default:'local'
  },
  subject:{
    type:String,
    required:true,
    default:''
  }
}, { timestamps: true,toJSON: {
  transform: (doc, ret) =>{
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  }
} });
UserSchema.plugin(mongooseUniqueValidator);


export const UserModel = model<IUser>('User', UserSchema);