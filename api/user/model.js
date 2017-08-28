import crypto from 'crypto'
import bcrypt from 'bcrypt'
import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

const userSchema = new Schema({
	email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String
  },
  firstname: { type: String, trim: true },
  lastname: { type: String, trim: true },
   picture: {
    type: String,
    trim: true
  }
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()
  const rounds = 1 
  bcrypt.hash(this.password, rounds).then((hash) => {
    this.password = hash
    next()
  }).catch(next)
})



const model = mongoose.model('User', userSchema)

export const schema = model.schema
export default model
