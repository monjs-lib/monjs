/**
 * Returns the value of the array at the given index
 * @param {Array<T>} obj
 * @param {Number} index
 * @returns {T | undefined}
 * @template T
 * @example
 * ```
 * let arr = [1, 2, 3];
 * at(arr, 0); // => 1
 * at(arr, 5); // => undefined
 * ```
 */
function at<T>(obj: Array<T>, index: number): T | undefined;
