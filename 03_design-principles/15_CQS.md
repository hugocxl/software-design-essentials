# CQS (Command-Query Separation) Principle

CQS (Command-Query Separation) is a software design principle that states that a
method or function should either be a command that performs an action, or a
query that returns data, but not both. CQS is based on the idea that mixing
commands and queries in a single method or function can lead to confusion and
complexity, and that it is better to separate them into distinct methods or
functions.

To follow the CQS principle in your software design, you should ensure that each
method or function has a well-defined purpose, and that it either performs an
action or returns data, but not both. For example, a method that saves data to a
database should be a command, and a method that retrieves data from a database
should be a query. This can help to make your software more modular,
maintainable, and easy to understand.

For example, here is a simple class that follows the CQS principle in
TypeScript:

```typescript
class User {
  private firstName: string
  private lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  // This is a query that returns data (the full name of the user)
  getName(): string {
    return this.firstName + ' ' + this.lastName
  }

  // This is a command that performs an action (setting the first and last name of the user)
  setName(firstName: string, lastName: string): void {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const user = new User('John', 'Doe')

console.log(user.getName()) // "John Doe"
user.setName('Jane', 'Doe')
console.log(user.getName()) // "Jane Doe"
```

In this example, the User class has two methods: getName and setName. The
getName method is a query that returns the full name of the user, while the
setName method is a command that sets the first and last name of the user.
