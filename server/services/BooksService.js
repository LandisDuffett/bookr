import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BooksService {
  async find(query = {}) {
    const books = await dbContext.Books.find(query)
    return books
  }

  async findById(id) {
    const book = await dbContext.Books.findById(id)
    if (!book) {
      throw new BadRequest('Invalid Id')
    }
    return book
  }

  async getAll() {
    return await dbContext.Books.find()
  }

  async create(rawData) {
    const data = await dbContext.Books.create(rawData)
    return data
  }

  async delete(id, body) {
    const data = await dbContext.Boards.findOneAndRemove({ _id: id, creatorId: body.creatorId })
    if (!data) {
      throw new BadRequest('Invalid ID or you do not own this book')
    }
  }
}

export const booksService = new BooksService()
