const cacheableResponse = require('cacheable-response')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const cacheHours = 1
const handle = app.getRequestHandler()

const ssrCache = cacheableResponse({
  ttl: (cacheHours * 1000) * 60 * 60, // 1hour
  get: async ({ req, res }) => {
    console.log('Respondendo tela cacheada')
    const data = await app.renderToHTML(req, res, req.path, {
      ...req.query,
      ...req.params,
    })

    // Add here custom logic for when you do not want to cache the page, for
    // example when the page returns a 404 status code:
    if (res.statusCode === 404) {
      res.end(data)
      return
    }

    return { data }
  },
  send: ({ data, res }) => res.send(data),
})

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => ssrCache({ req, res }))

//   server.get('/blog/:id', (req, res) => {
//     return ssrCache({ req, res })
//   })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})