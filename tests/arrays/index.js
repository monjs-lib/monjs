import test from "ava";
import { at, remove } from "../../packages/arrays/index.js"

test("At function test", (t) => {
	let arr = [1, 2, 3];
	let index = 0;
	t.is(at(arr, index), 1);
	index = 5;
	t.is(at(arr, index), undefined);
});

test("Remove function test", (t) => {
	let arr = [1, 2, 3];
	let index = 0;
	t.deepEqual(remove(arr, index), [2, 3]);
});
