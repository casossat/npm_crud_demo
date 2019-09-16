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

  static retrieve(req, res) {
    console.log("retrieve book: ", req.params.id)

    return library_book
      .findByPk(req.params.id)
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  }

  static list(req, res) {
    return library_book
      .findAll()
      .then(data => res.status(200).send(data))
  }

  static remove(req, res) {
    console.log("remove book: ", req.params.id)

    return library_book
      .findByPk(req.params.id)
      .then(data => {
        if (data)
          return data
            .destroy()
            .then(() => res.status(200).send({
              success: true,
              message: "Delete Book: " + req.params.id
            }))
            .catch(err => res.status(400).send(err))
      })
  }

  static update(req, res) {
    const { name, authors, date_published, tier_id, subject_id, created_by_id, created_at, slug, image } = req.body

    return library_book
      .findByPk(req.params.id)
      .then(data => {
        if (data)
          return data
            .update({
              name, authors, date_published, tier_id, subject_id, created_by_id, created_at, slug, image,
              where: {
                id: req.body.Id
              }
            }).then(data => res.status(200).send({
              data: data,
              success: true,
              message: "Update Book"
            }))
      })
  }
}

export default libraryBook