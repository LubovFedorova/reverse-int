module.exports = function reverse (n) {
    let num = Math.abs(n);
    let str = num.toString();
      let arr = str.split('');
      let result = arr.reverse().join('');
      return result;
}
