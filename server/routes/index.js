import libraryBook from '../controllers/library_book'

export default(app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'A book...'
  }))

  app.post('/api/library_book', libraryBook.create)
}