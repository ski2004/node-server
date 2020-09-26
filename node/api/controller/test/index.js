const db = require('../../db.js')
const _ = require('../../common.js')

/**
 *  index show
 */
module.exports = {
  /**
   * Test 清單
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  list: function (req, res, next) {
    let params = req.body
    db.query(`select * from test `, (err, rows, fields) => {
      if (err) {
        throw err
      }
      // setTimeout(() => {
        res.json({
          result: rows,
          params: params,
          code: 200,
          msg: '成功'
        })
      // }, 300);

    })
  },
  /**
   * Test 新增一筆
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  add: function (req, res, next) {
    let params = req.body;
    let name = (params.name === '') ? _.randomStr(5) : params.name,
      age = (params.age === '') ? _.randomInt(1, 100) : params.age
    db.query(`insert into test (id, name, age, remark) values(NULL,'${name}',${age},NULL)`,
      {
        name: name,
        age: age
      }, (err, rows, fields) => {
        if (err) {
          throw err
        }

        if (err === null || !rows.affectedRows) {
          res.json({
            data: null,
            status: false,
            msg: '成功'
          })
        } else {
          res.json({
            data: null,
            status: true,
            msg: '失敗'
          })
        }
      })
  }
};


