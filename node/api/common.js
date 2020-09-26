/**
 *  index show
 */
module.exports = {
  /**
   * 隨機產生字串
   * @param {*} max 
   */
  randomStr: function (max = 6) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < max; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  },
  /**
   * 隨機產生數字
   * @param {*} min 
   * @param {*} max 
   */
  randomInt: function (min = 1, max = 100000) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  /**
   * 隨機產生陣列
   * @param {*} min 
   * @param {*} max 
   */
  randomArray: function (counter, obj) {
    let res = []
    for (let i = 0; i < counter; i++) {
      let data = this.randomData({ ...obj })
      res.push(data)
    }
    return res
  },
  /**
   * 隨機產生資料
   * @param {*} obj 
   */
  randomData: function (obj) {
    for (let key in obj) {
      if (obj[key] === 0) obj[key] = this.randomInt()
      if (obj[key] === '') obj[key] = this.randomStr()
    }
    return obj
  },
}


