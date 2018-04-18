const express = require('express')
const browser = require('browser-detect')
const accepts = require('accepts')
const app = express()
const port = process.env.PORT || 3000

app.get('/api/whoami/', (req, res) => {
  var language = accepts(req).languages()
  res.send({
    ipaddress: req.ip,
    language: language,
    software: browser(req.headers['user-agent']).os
  })
})

app.listen(port, () => {
  console.log('Listening to ', port)
})
