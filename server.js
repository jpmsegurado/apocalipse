const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000;

app.prepare()
.then(() => {
  const server = express()

  server.get('/person/:id', (req, res) => {
    app.render(req, res, '/person', Object.assign({}, req.query, { id: req.params.id }))
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + port)
  })
})