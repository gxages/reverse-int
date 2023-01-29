module.exports = function reverse (n) {
 
    let res = [...Math.abs(n).toString()].reverse().join("");
    return Number(res);
    // const num = toString(n);
    // return num.split("").reverse().join("");
}
// const str = (Math.abs(num)).toString()
