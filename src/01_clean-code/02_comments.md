# Comments

Comments are an important part of software programming, as they provide a way
for developers to document and explain their code. A good commenting practice
can help to improve the readability and maintainability of a codebase, and can
make it easier for others (including future versions of oneself) to understand
and work with the code.

In this chapter, we will explore the various ways in which comments can be used
in software programming, as well as the best practices for using them
effectively. We will begin by looking at the different types of comments,
including inline comments, block comments, and documentation comments. We will
then discuss the importance of writing clear and concise comments, and provide
some tips for doing so.

One of the most common uses for comments is to provide explanations for complex
or difficult-to-understand code. Inline comments, which are written on the same
line as the code they are explaining, can be used to provide a brief description
of what the code is doing. For example

## Rule 1: Don't write comments

Okay, it may seem a little bit ironic that the very first rule in this chapter
is proposing not to use comments. But, indeed this very first rule encapsulates
the most important principle that we must take into account when thinking about
comment in code: well-written code is self-explanatory and does not need
additional explanations in the form of comments. This means that the code must
be clear and concise, using good naming conventions that accurately reflect
their purpose and make it easy to understand what the code is doing without
needing comments.

Let's take into account this example:

Another reason for not using comments is that they can quickly become outdated
and inaccurate. As code changes over time, comments may no longer accurately
reflect the current state of the code, leading to confusion and potential bugs.
In some cases, outdated comments can be more harmful than no comments at all, as
they may give the false impression that the code is doing something it is not.

Furthermore, comments can also add to the overall complexity of the code, making
it more difficult to read and understand. In many cases, comments can be written
in a way that is hard to follow or that does not accurately reflect the code,
making it even more difficult to understand the purpose and function of the
code.

In addition, some studies have shown that the use of comments can actually
decrease the overall readability and maintainability of code. This is because
comments can add unnecessary clutter and noise to the code, making it harder to
focus on the actual code and understand its purpose and function.

Overall, while comments can be useful in some cases, they are not always
necessary and can even be detrimental to the readability and maintainability of
code. Therefore, not using comments can be justified in cases where the code is
clear and self-explanatory, and the use of comments would not improve the
overall quality of the code.

## Code explains what and how, comments explain why

Prefer refactoring code instead of writing comments

Comments that answer why are the only time I can advocate for them being
necessary. To make my argument in another illustration, look at the
following unclean code with comments in it.

```typescript
const _x: number = abs(x - deviceInfo.position.x) / scale
let directionCode
if ((0 < _x) & (x != deviceInfo.position.x)) {
  if (0 > x - deviceInfo.position.x) {
    directionCode = 0x04 /*left*/
  } else if (0 < x - deviceInfo.position.x) {
    directionCode = 0x02 /*right*/
  }
}
```

Comments don’t necessarily mean readable code. In fact, those comments wedged in
there don’t help. It’s lipstick on a pig. It doesn’t make the unclean code any
cleaner and the code is just as hard to understand. Now watch how much more
readable the code gets when we refactor it by stripping out the
comments, declaring variables at the top and using the constant-variable naming
convention.

```typescript
const DIRECTIONCODE_RIGHT: number = 0x02
const DIRECTIONCODE_LEFT: number = 0x04
const DIRECTIONCODE_NONE: number = 0x00
const oldX = deviceInfo.position.x
const directionCode =
  x > oldX
    ? DIRECTIONCODE_RIGHT
    : x < oldX
    ? DIRECTIONCODE_LEFT
    : DIRECTIONCODE_NONE
```

Comments often hurt more than it helps readability.

## When to write comments

Comments arent always bad, though. In fact, there are still a lot of developers
that are diehard fans of adding a comment to code. To find common ground, it is
safe to say that comment is, most times, a necessary evil. You should always aim
to make your code explanatory enough without comments. But if you cant, here are
some instances where commenting your code is still okay.

### When Writing Complex Expression

Even for the best programmers, complicated regex or SQL codes can be difficult
to express cleanly. In such a situation, adding a comment above the expression
will help any developer checking out the code later to understand it without
stress.

### Warnings

Sometimes, you need to warn other developers that will be looking at your code
about the possible consequences of an action to prevent them from breaking
something. In such cases, it is okay to leave a comment close to this code. Such
comments add value to your code and make it easy to avoid mysterious behavior in
the code in the future. Apart from warnings, you may also use a comment to
amplify the significance of a piece of code that may otherwise be overlooked by
a user.

### Legal Comments

There are certain that you are mandated to add to your program by corporate
coding standards. This can be due to legal reasons such as copyright or
authorship of the code. Such comments are necessary and should be added.

### When All Else Fails

Although I recommend making your code as expressive as possible without comment
when all else fails, and you are unable to write a code that is expressive on
its own, feel free to write a comment. Do not leave poorly written code the way
it is simply because you dont want to write a comment. You can add a comment to
explain or clarify the intent of your code instead of leaving it as it is.

However, if you must write comments at all, make sure you make it local. A local
comment is placed close to what it is referring to. A non-local comment, on the
other hand, is far away from the code it is explaining and is bound to become a
lie at some point.

Place comments that refer to a variable or function directly above it. A warning
comment should be right beside or immediately above the code it is referencing.
You may also make a warning comment stand out from the rest of your code if your
IDE supports highlighting.
