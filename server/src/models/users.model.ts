
import {FilterQuery,Model, model, Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import { IUser } from '../interfaces/users.interface';
export interface IUserModel extends Model<IUser>{
  findOneOrCreate(condition:FilterQuery<IUser>):void
}

const UserSchema = new Schema<IUser,IUserModel>({
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
  displayName: {
    type: String
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
  image: {
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
  token: {
    type: String,
    required: true,
    default: null
  },
  provider: {
    type: String,
    required: false,
    default: 'local'
  },
  googleId: {
    type: String,
    required: false,
    default: ''
  },
  facebookId: {
    type: String,
    required: false,
    default: ''
  }
}, {
  timestamps: true, toJSON: {
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
      delete ret.password;
    }
  }
});
UserSchema.plugin(mongooseUniqueValidator);
UserSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {
  this.findOne(condition, (err: Error, result: IUser) => {
    return result ?
    callback(err, result) :
    this.create(condition, (err: Error, result: IUser) => { return callback(err, result) })
  })
}
export const UserModel = model<IUser,IUserModel>('User', UserSchema);