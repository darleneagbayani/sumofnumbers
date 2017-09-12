/*
 * Solving Experience E26.
 * Created by darleneagbayani on 9/11/17
 */

let list = [1, 2, 3, 4];

function sumFor(list) {
  let sum = 0;
  for(var i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor(list));

function sumWhile(list) {
  let sum = 0;
  while(list.length > 0) {
    sum += list.pop();
  }
  return sum;
}

console.log(sumWhile(list));

function sumRecursion(list) {
  if(list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

console.log(sumRecursion([1, 2, 3, 4]));

function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, num) {return memo + num; }, 0);
}

console.log(sumTheSimpleWay([1, 2, 3, 4]));