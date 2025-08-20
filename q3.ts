function findMax(arr: number[]):number | null {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

const arr: number[] = [3, 7, 9];
console.log(findMax(arr));