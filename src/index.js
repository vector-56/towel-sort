module.exports = function towelSort(matrix) {
  let resultArr = [];
  if (matrix === undefined) {
    return []
  }
  for (i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      resultArr.push(...matrix[i])
    } else {
      resultArr.push(...matrix[i].reverse())
    }
  }
  return resultArr;
}