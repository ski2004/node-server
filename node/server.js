
require('dotenv').config();
const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const api = require('./api/router')
//設定server網址，因為在本機端測試，所以輸入127.0.0.1
// const hostname = '127.0.0.1'  //上傳至伺服器需拿掉

//port 號會由 Heroku 給予，因此不再自行指定
const port = process.env.PORT || 3005;
const host = process.env.HOST || ''

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('port', port)
// Import API Routes
app.use('/api', api)
/**
 * 測試效能
 * loadtest -n 1000 -c 100 http://127.0.0.1:3005/hello-word 
 */
app.get('/hello-word', (req, res) => {
  // setTimeout(() => {
    console.log("done")
    res.send('Hello World')
  // }, 2000)
})
// Start nuxt.js
async function start() {
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
