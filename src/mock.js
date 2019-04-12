
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

/**
 * 生成mock数据
 * @param  {[int]} startIndex [起始index]
 * @param  {[int]} number     [数据数]
 * @return {[Promise of list of mock]}            [返回mock数据]
 */
export default (startIndex = 0, number = 20) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mock = []
      const time = new Date()
      for (let id = startIndex; id < number; id++) {
        mock.push({
          id,
          time,
          data: getRandomInt(number)
        })
      }
      resolve(mock)
    }, 2000)
  })
}
