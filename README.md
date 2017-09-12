JavaScript Arrays Lab
---

## Objectives

1. Practice writing arrays
2. Practice manipulating arrays
3. Explain how to manipulate arrays in a non-destructive way

## Introduction

Previously, we've learned about how arrays work. We know that `push()` pushes elements onto the ends of arrays, and `pop()` pops them off; similarly, `unshift()` adds elements to the beginnings of arrays, and `shift()` pulls them off.

Now it's time to put what we've learned to the test.

## What's with all this destruction?

You might have noticed that our tests are looking for functions like `destructivelyAppendDriver()` — what's up with that?

We want to distinguish between actions that _mutate_ ("change") their underlying structures (like `pop()`, `push()`, `shift()`, and `unshift()`) and those functions that leave those structures untouched.

In general, it's good practice to avoid mutating a program's state whenever possible. So we want to call out these methods as destructive, since mutating state means we don't always know what we're dealing with. Indeed, these mutations mean that we need to refresh the test environment after every test to make sure that we're not working with mutated data!

By contrast, we also have methods like `appendDriver()`, which simply adds a driver to the end of the `drivers` array and returns the _new_ array, leaving the existing array untouched. This flow is preferable to mutating state because we have complete control over what's going into and coming out of the function.

## Run those tests!

You'll notice that the first test asks for an array called `drivers`, set to an initial value of `["Milo", "Otis", "Garfield"]`.

In our test file, we're going to reset this array to your initial value after every test. Some of our tests manipulate arrays in place, and we want to be sure that we can get back to a blank slate between tests.

Why is a blank slate important? We want our programs to be predictable: this makes them more robust, easier to maintain, and less prone to bugs. One way to achieve predictability is by isolating our tests from one another, meaning that no test should depend on the outcome or process of any other test. That way, tests can run in any order and test _known_ inputs and environments, rather than depending on other tests running first and modifying the entire environment.

Remember the workflow:

1. Run `learn-test`.

2. Read the errors; vocalize what they're asking you to do.

3. Write code; repeat steps 1 and 2 often until a test passes.

4. Repeat as needed for further tests.

5. Run `learn submit` when finished!

If you open up `test/indexTest.js`, you will see that in the `beforeEach` block we initialize our `driver` array values so that you can focus on what really matters — understanding how to manipulate arrays in JavaScript.

## Resources

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-arrays-lab'>Javascript Arrays Lab</a> on Learn.co and start learning to code for free.</p>
