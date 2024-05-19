function hasTargetSum(array, target) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  /* for (let i = startIndex + 1; i <= endIndex; i++){
    if(array[startIndex] + array[i] === target){
      return true;
    }
  } startIndex++; */

  for(let counter = 0; counter < array.length - 1; counter++){
    for (let i = startIndex + 1; i <= endIndex; i++){
      if(array[startIndex] + array[i] === target){
        return true;
      }
    } startIndex++;
  } return false;
}

// [a, b, c, d, e, f]           [a, b, c, d, e, f]          [a, b, c, d, e, f]
//  ^  ^                            ^  ^                           ^  ^
//  ^     ^                         ^     ^                        ^     ^
//  ^        ^                      ^        ^                     ^        ^
//  ^           ^                   ^           ^
//  ^              ^

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

// Go through the full array, adding every element to the index 0 and comparing to target
  // Go through the full array again, adding every element to the index 1 element (exclude index 0) and comparing to the target
  // Go through the full array again, adding every element to to the index 2 element (exlucde index 0, 1) and comparing to the target
  // Repeat until you reach the second to last and last elements
  // If at any point there is a match, return true. Otherwise continue and once no more, return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 11));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([47, 1, 4, 33, 7, 8], 80));

  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 9], 12));
}

module.exports = hasTargetSum;
