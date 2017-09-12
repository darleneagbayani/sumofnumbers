/*
 * Solving Experience E26.
 * Created by darleneagbayani on 9/11/17
 */
let listOfNum = [1, 2, 3, 4];

function sumFor(listOfNum) {
  let sum = 0;
  for (var i = 0; i < listOfNum.length; i++) {
    sum += listOfNum[i];
  }
  return sum;
}

console.log(sumFor(listOfNum));

function sumWhile(listOfNum) {
  let sum = 0;
  while(listOfNum.length > 0) {
    sum += listOfNum.pop();
  }
  return sum;
}

console.log(sumWhile(listOfNum));

function sumRecursion(listOfNum) {
  let sum = 0;
  if(listOfNum.length === 0) {
    return 0;
  }
  return listOfNum[0] + sumRecursion(listOfNum.slice(1, listOfNum.length));
}

console.log(sumRecursion([1, 2, 3, 4]));

function sumTheSimpleWay(listOfNum) {
  return _.reduce(listOfNum, function(memo, num) {return memo + num; }, 0);
}

console.log(sumTheSimpleWay([1, 2, 3, 4]));