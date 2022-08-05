function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == num) {
      return arr[mid];
    } else if (num > arr[mid]) {
      start = mid + 1;
    } else if (num < arr[mid]) {
      end = mid - 1;
    }
  }
  return -1; // if num is not present in the array
}

let studentIds = [11, 12, 15, 19, 23, 45, 54, 91, 100];

let result = binarySearch(studentIds, 100);
console.log(result);
