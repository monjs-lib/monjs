# `at`

Returns the index of an array at the given index

* `param {Array<T>} obj`
* `param {Number} index`
* `returns {T | undefined}`
* `template T`

```typescript
function at<T>(obj: Array<T>, index: number): T | undefined
```

## Example(s)

> Javascript

```javascript
let arr = [1, 2, 3];
at(arr, 0); // => 1
at(arr, 5); // => undefined
```
> Typescript

```typescript
let arr: Array<number> = [1, 2, 3];
at<number>(arr, 0); // => 1
at<number>(arr, 5); // => undefined
```