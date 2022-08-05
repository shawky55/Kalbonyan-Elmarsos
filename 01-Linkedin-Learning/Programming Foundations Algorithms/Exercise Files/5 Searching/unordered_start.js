//  searching for an item in an unordered list
//  sometimes called a Linear search

items = [1, 20, 8, 19, 56, 23, 87, 41, 49, 53]


function findItem(item,list){
  for(let i=0;i<list.length;i++){
      if(item==list[i]){
          return item;

      }
  }
  return -1
}

console.log(findItem(23, items))
console.log(findItem(250, items))
