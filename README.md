# Objects Lab

## Learning Goals

- Create an `Object`
- Perform operations on an `Object`

## Introduction

We covered the concepts of `Object`s in JavaScript. Now it's time to put the
concepts into practice.

If you haven't already, fork and clone this lab into your local environment.
Navigate into its directory in the terminal, then run `code .` to open the files
in Visual Studio Code.

## Instructions

Follow the steps below, running `learn test` as you go to get additional
information from the tests.

Let's say we are working on a program that will keep track of a company's
employees. We want to store each `employee` as an `Object`. We're starting
small, so to begin with we'll only keep track of the employee's name and street
address.

To start, define a `employee` variable and assign it to an `Object` containing
`name` and `streetAddress` keys; you can use whatever values you like. Use
literal syntax to create your `Object`. Various updates will be applied to this
variable (destructively and non-destructively) in this lab.

Once you've initialized the `employee` Object, you'll need to create the
following four functions:

- `updateEmployeeWithKeyAndValue()`: this function should take in three
  arguments: an `employee` `Object`, a `key` and a `value`. This function should
  not mutate the `employee`; it should return a _new_ `Object` that has an
  updated `value` for the `key` passed in. **Hint**: use the spread operator!
- `destructivelyUpdateEmployeeWithKeyAndValue()`: this function should work the
  same as `updateEmployeeWithKeyAndValue()` but it _should_ mutate the
  `employee` `Object` passed in.
- `deleteFromEmployeeByKey()`: this function should take in a `employee`
  `Object` and a `key`. It should delete the property with that `key` from the
  `employee` `Object`. This should not mutate the original `employee` `Object`;
  it should return a _new_ `Object` that doesn't include the identified
  key-value pair. **Hint**: use the spread operator!
- `destructivelyDeleteFromEmployeeByKey()`: this function should work the same
  as `deleteFromEmployeeByKey()` but it _should_ mutate the `employee` `Object`.

As you work on your functions, be sure to think about when to use dot notation
vs. bracket notation.

## Conclusion

In this lab, we practiced creating an `Object` and performing operations on it.

## Resources

- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
