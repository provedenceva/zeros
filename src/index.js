module.exports = function getZerosCount(number) {
  var count = 0;
  var k = 1;
  do {
    count += Math.floor(number / Math.pow(5, k));
    k++;
  }
  while (Math.pow(5, k) < number) 
  return count;
  }
  // your implementation

