import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { BookSchema } from '../models/Book'

class DbContext {
  Books = mongoose.model('Book', BookSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
