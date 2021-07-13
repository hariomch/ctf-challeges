const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

router.get('/', function (req, res) {
  if (
    JSON.stringify(req.headers['user-agent']).toLowerCase().includes('advaith')
  ) {
    res.sendFile(path.join(__dirname + '/index.html'))
  } else {
    res.sendFile(path.join(__dirname + '/noob.html'))
  }
})

app.use('/', router)
app.listen(process.env.port || 3000)

console.log('Running at Port 3000')
