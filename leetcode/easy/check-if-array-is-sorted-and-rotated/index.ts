/*

Check if Array Is Sorted and Rotated

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length
such that B[i] == A[(i+x) % A.length] for every valid index i.

Example 1:

  Input: nums = [3,4,5,1,2] => 5 elementos
                [2, 3, 4, 5, 1] => 1ra rotacion
                [1, 2, 3, 4, 5] => 2da rotacion => en esta rotacion encontramos nums ordenado
                [5, 1, 2, 3, 4] => 3ra rotacion
                [4, 5, 1, 2, 3] => 4ta rotacion => la cantidad de rotaciones son nums length -1
                [3, 4, 5, 1, 2] => 5ta rotacion que vuelve a la original
  Output: true
  Explanation: [1,2,3,4,5] is the original sorted array.
  You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].

Example 2:

  Input: nums = [2,1,3,4]
                [4, 2, 1, 3]
                [3, 4, 2, 1]
                [1, 3, 4, 2]
                [2, 1, 3 ,4]


  Output: false
  Explanation: There is no sorted array once rotated that can make nums.

Example 3:

  Input: nums = [1,2,3]
                [3, 1, 2]
                [2, 3, 1]
                [1, 2, 3]

  Output: true
  Explanation: [1,2,3] is the original sorted array.
  You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.

*/

function areNumberArrayEquals(arrayA: number[], arrayB: number[]): boolean {
	return arrayA.every((number, index) => number === arrayB[index]);
}

function rotateArray(array: number[], position: number): number[] {
	return Array.from(
		array,
		(_, index) => array[(index + position) % array.length] as number,
	);
}

function check(nums: number[]): boolean {
	const numsSorted = nums.toSorted();

	if (areNumberArrayEquals(nums, numsSorted)) {
		return true;
	}

	for (let i = 1; i < nums.length; i++) {
		const rotatedArray = rotateArray(numsSorted, i);

		if (areNumberArrayEquals(rotatedArray, numsSorted)) {
			return true;
		}
	}

	return false;
}

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;

	it("check", () => {
		expect(check([3, 4, 5, 1, 2])).toBe(true);

		expect(check([2, 1, 3, 4])).toBe(false);

		expect(check([1, 2, 3])).toBe(true);

		expect(check([9, 10, 1, 2, 3, 3, 4, 4, 7, 8])).toBe(true);
	});
}
