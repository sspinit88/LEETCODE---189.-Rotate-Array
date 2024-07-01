/*
189. Rotate Array

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 
Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Constraints:

    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1
    0 <= k <= 105

 

Follow up:

    Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
    Could you do it in-place with O(1) extra space?

*/

/**
 * This function rotates an array to the right by k steps.
 * Эта функция поворачивает массив вправо на k шагов.
 *
 * @param {number[]} nums - The array to rotate. Массив для вращения.
 * @param {number} k - The number of steps to rotate the array. Количество шагов для вращения массива.
 * @return {number[]} The rotated array. Повернутый массив.
 */
function rotate(nums, k) {
  // The actual number of steps to rotate is the remainder of k divided by the length of the array.
  // Фактическое количество шагов для вращения - это остаток от деления k на длину массива.
  k = k % nums.length;

  // Reverse the entire array.
  // Перевернуть весь массив.
  reverse(nums, 0, nums.length - 1);

  // Reverse the first k elements.
  // Перевернуть первые k элементов.
  reverse(nums, 0, k - 1);

  // Reverse the remaining elements.
  // Перевернуть оставшиеся элементы.
  reverse(nums, k, nums.length - 1);

  return nums;
}

/**
 * This helper function reverses a portion of an array.
 * Эта вспомогательная функция переворачивает часть массива.
 *
 * @param {number[]} nums - The array to reverse. Массив для переворачивания.
 * @param {number} start - The starting index. Начальный индекс.
 * @param {number} end - The ending index. Конечный индекс.
 */
function reverse(nums, start, end) {
  while (start < end) {
    // Swap the start and end elements.
    // Поменять местами начальный и конечный элементы.
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    // Move towards the middle.
    // Двигаться к середине.
    start++;
    end--;
  }
}

/*
This solution has a time complexity of O(n) and a space complexity of O(1), where n is the length of the array.

Это решение имеет временную сложность O(n) и пространственную сложность O(1), где n — длина массива.
*/
