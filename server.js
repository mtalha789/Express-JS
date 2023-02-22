const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("<h1>HEllo Talha</h1><hr/> <p>Pakistan ZindBAD</p>")
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})