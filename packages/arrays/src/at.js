/**
 * Returns the value of the array at the given index
 * @param {Array<T>} obj
 * @param {Number} index
 * @returns {T | undefined}
 * @template T
 */
export default function at(obj, index) {
	return obj[index] ? obj[index] : undefined;
};
