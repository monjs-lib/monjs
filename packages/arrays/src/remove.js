/**
 * Removes the index of an array
 * @param {Array<T>} arr
 * @param {Number} index
 * @returns {T}
 * @template T
 */
export default function remove(arr, index) {
	return arr.slice(0, index).concat(arr.slice(index + 1));
}
