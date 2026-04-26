/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const setA = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!setA.has(nums[i])) {
      setA.add(nums[i]);
    } else {
      setA.delete(nums[i]);
    }
  }

  const arr = [...setA];
  return arr[0];
};

const myArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9];

console.log(singleNumber(myArray));
