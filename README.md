# Objects Lab

## Problem Statement

We covered the concepts of `Object`s in JavaScript. Now it's time to put the
concepts into practice.

## Learning Goals

- Create `Object`s
- Perform operations on `Object`s

## Instructions

Follow the steps below, running `learn` as you go to get additional information
from the tests. To start, define a `driver` variable and assign it to an
`Object`. Various updates will be applied to this variable (destructively and
non-destructively) in this lab.

You'll be writing four functions:

- `updateDriverWithKeyAndValue()`- this function should take in three arguments:
  a `driver` `Object`, a `key` and a `value`. This function should not mutate the
  `driver` and should return a _new_ `driver` that has an updated
  `value` for the `key` passed in.
- `destructivelyUpdateDriverWithKeyAndValue()` - this function should work the
  same as `updateDriverWithKeyAndValue()` but it _should_ mutate the `driver`
  parameter passed in.
- `deleteFromDriverByKey()` - this function should take in a `driver` `Object`
  and a `key`. It should delete the `key`/`value` pair for the `key` that was
  passed in from the `driver` `Object`. This should all not actually mutate the
  `driver` passed in.
- `destructivelyDeleteFromDriverByKey()` - this function should work the same as
  `deleteFromDriverByKey()` but it _should_ mutate the `driver` passed in. Be
  sure and consider whether dot-notation or bracket-notation might affect your
  solution.

**HINT**: You might find `deleteFromDriverByKey()` to be a bit hard to write
non-destructively. Think about how we learned to use `Object.assign()`. What
happens if we do this:

```js
const obj = { foo: "bar" };

const newObj = Object.assign({}, obj);

newObj;
// => { foo: "bar" }

delete newObj['foo'];
// => true

newObj;
// => {}

obj;
// => { foo: "bar" }
```

Something to keep in mind!

## Conclusion

In this lab, we worked with creating `Object`s and performing operations on
them.

## Resources

- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-data-structures-objects-lab'>Objects Lab</a> on Learn.co and start learning to code for free.</p>
