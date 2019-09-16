import libraryBook from '../controllers/library_book'

export default (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'A book...'
  }))

  app.get('/api/library_book', libraryBook.list)
  app.get('/api/library_book/:id', libraryBook.retrieve)
  app.post('/api/library_book', libraryBook.create)
  app.delete('/api/library_book/:id', libraryBook.remove)
  app.put('/api/library_book/:id', libraryBook.update)
}