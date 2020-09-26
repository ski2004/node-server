
const _ = require('../../common.js')

/**
 *  index show
 */

const struct = {
  id: 0,
  name: '',
  age: 0,
  remark: ''
}

module.exports = {

  /**
   * Test 清單
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  list: function (req, res, next) {
    setTimeout(()=>{
      res.json({
        result: _.randomArray(10, { ...struct }),
        code: 200,
        msg: '成功'
      })
    },1000)

  },
  /**
   * Test 新增一筆
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  add: function (req, res, next) {
    let params = req.body;
    res.json({
      code: 200,
      msg: '成功'
    })
  }
};

