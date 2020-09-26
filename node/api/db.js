const mysql = require('mysql')
const setting = require('./setting.js')


const option = {
  host: setting.host,
  port: setting.port,
  user: setting.username,
  password: setting.password,
  database: setting.name
}

const pool = mysql.createPool(option)

/**
 * select和delete操作
 * @param  {string}   sql      
 * @param  {Function} callback 
 * @return {none}
 * */
const __selsctDelete = (sql, callback) => {
  pool.getConnection(function (err, conn) {
    if (err) {
      console.log('CONNECT ERROR:', err.message)
      callback(err, null, null)
    } else {
      console.log('SQL:',sql )
      conn.query(sql, function (err, rows, fields) {
        // 釋放連線
        conn.release()

        callback(err, rows, fields)
      })
    }
  })
}

/**
 * update和insert操作
 * @param  {string}   sql      sql
 * @param  {array}    params   
 * @param  {Function} callback 
 * @return {none}
 */
const __updateInsert = function (sql, params, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      console.log('CONNECT ERROR:', err.message)
      callback(err, null, null)
    } else {
      console.log('SQL:',sql )
      conn.query(sql, params, function (err, rows, fields) {
        // 釋放連線
        conn.release()

        callback(err, rows, fields)
      })
    }
  })
}

/**
 * query函數重載
 * @return {none}
 */
exports.query = function () {
  var length = arguments.length
  var sql = ''
  var cb = ''
  if (length === 2) {
    sql = arguments[0]
    cb = arguments[1]
    __selsctDelete(sql, cb)
  } else if (length === 3) {
    sql = arguments[0]
    var params = arguments[1]
    cb = arguments[2]
    __updateInsert(sql, params, cb)
  } else {
    console.log('ERROR:', '参數不對呀？親～～')
  }
}
