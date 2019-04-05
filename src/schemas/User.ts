import { Schema, model, Document, Model } from 'mongoose'
import { UserInterface } from '../interfaces/User'

export interface UserModel extends UserInterface, Document {
  fullname(): string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullname = function (): string {
  return `${this.firstName.trim()} ${this.lastName.trim()}`
}

export const User: Model<UserModel> = model<UserModel>('User', UserSchema)
