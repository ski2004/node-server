// import { Router } from 'express'
const Router = require('express').Router
const test = require('./controller/test/faker');//假資料不透過DB
// const test = require('./controller/test')
var router = Router()
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  const date = new Date().getTime();
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
  });
  console.log('=======', 'Time: ', dateTimeFormat.format(date), '=======');
  console.log(req.method, req.originalUrl, ', Body: ', req.body);
  next();
  // console.log( '===========================================' );
});

router.post('/add', test.add);
router.get('/list', test.list);

// middleware that is specific to this router
// Add databases Routes


module.exports = router; 
