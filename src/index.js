module.exports = function towelSort(matrix) {
  const resultArr = []
  for (let i=0; i<matrix.length; i++) {
    if(i%2!==0) {
      resultArr.push(...matrix[i].reverse())
    } else {
    resultArr.push(...matrix[i])
    }
  }
  return resultArr
}