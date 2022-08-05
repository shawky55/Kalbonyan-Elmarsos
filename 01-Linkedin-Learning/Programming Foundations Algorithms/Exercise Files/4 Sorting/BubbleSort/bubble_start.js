//Bubble sort algorithm
//arr=[-2,45,0,11,-9]
//-2,0,11,-9,45
//-2,0,-9,11,45
//-2,-9,0,11,45
//-9,-2,0,11,45

function swap(list1, list2) {
  let temp = list1;
  list1 = list2;
  list2 = temp;
}
function BubbleSort(list) {
for (let i = 0; i < list.length; i++) {
    for (let j of list) {
        if (list[j] > list[j + 1]) {
        swap(list[j], list[j + 1]);
        }
    }
    return list;
}
}

let sortedArray = BubbleSort([-8, 0, 2, 3, 4]);
console.log(sortedArray);
