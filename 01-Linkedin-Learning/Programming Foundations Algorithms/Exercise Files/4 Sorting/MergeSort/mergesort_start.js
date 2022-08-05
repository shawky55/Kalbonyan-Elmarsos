// # Implement a merge sort with recursion


/**
 * [7,-1,8,4]
 * leftSide=[7,-1]
 * * * * * *  [7,-1]
 * * * * * *  leftSide=[7]
 * * * * * *  rightSide=[-1]
 * * * * * *        return [-1,7]
 * rightSide=[8,4]
 * * * * * *  [8,4]
 * * * * * *  leftSide=[8]
 * * * * * *  rightSide=[4]
 * * * * * *        return [4,8]
 * ->>>>return[-1,4,7,8]
 */

let items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];

const _mergeArrays = (a, b) => {
  const c = [];

  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift());
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    c.push(a.shift());
  }
  while (b.length) {
    c.push(b.shift());
  }

  return c;
};

const mergeSort = (a) => {
  if (a.length < 2) return a;
  const middle = Math.floor(a.length / 2);
  const a_l = a.slice(0, middle);
  const a_r = a.slice(middle, a.length);
  const sorted_l = mergeSort(a_l);
  const sorted_r = mergeSort(a_r);
  return _mergeArrays(sorted_l, sorted_r);
};

