import model from '../models'

const { library_book } = model

class libraryBook {
  static create(req, res) {
    const { name, authors, date_published, tier_id, subject_id, created_by_id, created_at, slug, image } = req.body

    console.log(req.body)

    return library_book
      .create({
        name, authors, date_published, tier_id, subject_id, created_by_id, created_at, slug, image
      })
      .then(data => res.status(201).send({
        success: true,
        message: 'Book created ', data
      }))
  }

  static list(req, res) {
    return library_book
      .findAll()
      .then(data => res.status(200).send(data))
  }
}

export default libraryBook