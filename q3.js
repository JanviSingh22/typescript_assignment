function findMax(arr) {
    if (arr.length === 0)
        return null;
    return Math.max.apply(Math, arr);
}
var arr = [3, 7, 9];
console.log(findMax(arr));
