import http from 'http'
import logger from 'morgan'
import express from 'express'
import bodyParser from 'body-parser'

import routes from './server/routes'

const hostname = 'localhost'
const port = 3000
const app = express()
const server = http.createServer(app)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

routes(app)

app.get('*', (req, res) => res.status(200).send({
  message: "Hello World!"
}))

server.listen(port, hostname, () => {
  console.log(`App running on ${hostname} ${port}.`)
})