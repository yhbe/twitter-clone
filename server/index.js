const express = require("express")
const app = express()
const port = process.env.PUBLIC_URL || 5000

app.listen(port, () => {
  console.log(`now listening on ${port}`)
})