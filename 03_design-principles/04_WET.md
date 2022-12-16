# WET (Write Everything Twice) Principle

The WET principle is a design guideline that is the opposite of the DRY principle. While the DRY principle states that you should avoid repeating the same code or data in multiple places in your program, **the WET principle states
that you should duplicate code or data when it makes your program more flexible or easier to maintain**.

The acronym WET stands for "Write Everything Twice," and it emphasizes the importance of making trade-offs between simplicity and flexibility in your code. While the DRY principle is focused on reducing duplication and making your code more modular, the WET principle recognizes that there may be times when duplication is necessary in order to achieve other goals, such as increased flexibility or maintainability. When you start to develop a new system you don’t know all the future requirements. So don’t rush into abstractions. You need to remember: Duplication is far cheaper than the wrong abstraction.

Every principle needs to be applied depending on the context. Sometimes code duplication suits the environment. Removing that might introduce unnecessary upfront coupling or complexity into the system. In such situations, living with a bit of duplication might not be the worst thing.

To follow the WET principle in your software development, you should be willing to duplicate code or data when it is necessary to achieve a specific goal. This might mean duplicating a block of code in order to make it easier to modify or maintain, or it might mean duplicating data in order to make it more accessible or easier to use.

One common scenario where the WET principle might be applicable is when you are working with a large or complex codebase. In these cases, it may be necessary to duplicate some code or data in order to make your program more modular and maintainable. For example, you might duplicate a piece of data in order to store it in multiple, separate data structures, in order to make it more easily accessible or searchable.

## Pros

## Cons

Unnecessarily verbose code: WET code is often unnecessarily verbose, as it involves repeating the same calculations or tasks multiple times. This can make the code more difficult to read and understand.

Increased maintenance effort: WET code is often more difficult to maintain, as changes or updates need to be made in multiple places. This can increase the effort required to maintain the code.

Increased risk of errors: WET code is more prone to errors, as it is easy to miss changes or updates that need to be made in multiple places.

## Conclusions

In summary, the WET principle is a design guideline that is the opposite of the DRY principle. While the DRY principle emphasizes the importance of avoiding duplication in your code, the WET principle recognizes that there may be times when duplication is necessary in order to achieve specific goals, such as increased flexibility or maintainability. By following the WET principle, you can create code that is more flexible and adaptable, and that will be easier to work with over time.
