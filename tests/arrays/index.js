import test from "ava";
import at from "../../packages/arrays/src/at.js"

test("At function test", (t) => {
	let arr = [1, 2, 3];
	let index = 0;
	t.is(at(arr, index), 1);
	index = 5;
	t.is(at(arr, index), undefined);
});
