import { model, Schema } from 'mongoose';
const UserSchema = new Schema({
  id: {
    type: String,
    unique: [true, 'id must be unique'],
    required: [true, 'id is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    lowercase: true
  },
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  dob: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
    unique: [true, 'Email must be unique'],
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
  hashedPassword: {
    type: String,
    required: [true, 'Password is required'],
  },
}, { timestamps: true});
export const UserModel = model('User', UserSchema);