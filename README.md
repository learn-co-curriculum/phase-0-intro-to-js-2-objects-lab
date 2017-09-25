# Objects Lab

## Overview
In this lab, we'll create `driver` objects and perform various operations on them.

## Instructions
Be sure to run the tests to get a feel for the types of problems this lab is asking you to solve. In particular, you'll need to define a `driver` object and then apply certain updates (destructively and non-destructively) in various functions.

You'll be writing four functions:
* `updateDriverWithKeyAndValue()`- this function should take in a `driver` object, a `key` and a `value`. The function should not mutate the `driver` parameter and return a new `driver` that has an updated `value` for the `key` passed in.
* `destructivelyUpdateDriverWithKeyAndValue()` - this function should work the same as `updateDriverWithKeyAndValue()` but it *should* mutate the `driver` parameter passed in.
* `deleteFromDriverByKey()` - this function should take in a `driver` object and a `key`. It should delete the `key`/`value` pair for the `key` that was passed in from the `driver` object. This should all not actually mutate the `driver` passed in.
* `destructivelyDeleteFromDriverByKey()` - this function should work the same as `deleteFromDriverByKey()` but it *should* mutate the `driver` passed in.

Good luck!

**HINT**: You might find `deleteFromDriverByKey()` to be a bit hard to write non-destructively. Think about how we learned to use `Object.assign()`. What happens if we do this:
```js
const obj = { foo: 'bar' };

const newObj = Object.assign({}, obj);

newObj;
// => { foo: "bar" }

delete newObj.foo;
// => true

newObj;
// => {}

obj;
// => { foo: "bar" }
```

Hmmmmm...

## Resources
- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-data-structures-objects-lab'>Objects Lab</a> on Learn.co and start learning to code for free.</p>
