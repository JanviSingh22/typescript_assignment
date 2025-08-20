function sumArray(numbers) {
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
var nums = [3, 7, 9];
console.log(sumArray(nums));
