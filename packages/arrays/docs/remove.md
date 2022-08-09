# `remove`

Removes an index of an array

* `param {Array<T>} arr`
* `param {number} index`
* `template T`
* `returns T`

```typescript
function remove<T>(arr: Array<T>, index: number): T;
```

## Example(s)

> Javascript

```javascript
let arr = [1, 2, 3];
remove(arr, 0); // => [2, 3]`
remove(arr, 5); // => [1, 2, 3] (index doesn't exist)
```

> Typescript

```typescript
let arr: Array<number> = [1, 2, 3];
remove<number>(arr, 0); // => [2, 3]
```