# DRY (Don't Repeat Yourself) Principle

**The DRY (Don't Repeat Yourself) design principle aims to reduce duplication in a codebase.** This principle states that every piece of knowledge or logic should have a single, unambiguous representation within a system. In other words, you should avoid repeating the same information or code in multiple places in your system.

The DRY principle is based on the idea that duplication in your code can lead to several problems. For example, if you have the same code or data in multiple places, you will need to update each instance of that code or data when you make a change. This can be time-consuming and error-prone, and it can make it difficult to maintain your code over time. Additionally, duplication can make your code less readable and more difficult to understand, which can make it harder to work with for other developers.

To follow the DRY principle in your software development, you should look for ways to avoid duplication in your code. This means using functions, loops, or other language features to make your code more modular and reusable. For example, if you have a block of code that is used in multiple places, you can move that code into a function, and then call that function whenever you need to execute that code. This will reduce duplication and make your code easier to maintain.

Here is an example of how you might apply the DRY principle in typescript:

```typescript
function calculateTotal(price: number, tax: number) {
  return price * (1 + tax);
}

function calculateTotalWithDiscount(price: number, tax: number, discount: number) {
  return price *(1 + tax)* (1 - discount);
}
```

In the example above, the two functions `calculateTotal` and `calculateTotalWithDiscount` both contain the same logic for calculating the total price with tax included. This violates the DRY principle because the same logic is repeated in two different places in the system.

To fix this, we can extract the shared logic into a separate function, and call that function from both `calculateTotal` and `calculateTotalWithDiscount`:

```typescript
function calculateTotalWithTax(price: number, tax: number) {
  return price * (1 + tax);
}

function calculateTotal(price: number, tax: number) {
  return calculateTotalWithTax(price, tax);
}

function calculateTotalWithDiscount(price: number, tax: number, discount: number) {
  return calculateTotalWithTax(price, tax) * (1 - discount);
}
```

This way, we only have to write the logic for calculating the total with tax once, and we can use it in multiple places in our code. This makes our code more maintainable and easier to read because the logic is not repeated.

Another important aspect of the DRY principle is the idea of abstractions. By using abstractions, you can create more general, reusable components that can be used in multiple places of your code. For example, you might use an abstract class or interface to define a common set of behavior or properties that can be shared by multiple concrete classes. This can reduce duplication and make your code more modular and maintainable.

Let's take a look at the following example:

```typescript
class Developer {
  public name: string;
  public salary: number;
  public programmingLanguage: string;

  constructor(name: string, salary: number, programmingLanguage: string) {
    this.name = name;
    this.salary = salary;
    this.programmingLanguage = programmingLanguage;
  }

  // ...
}

class Manager {
  public name: string;
  public salary: number;
  public managedDevelopers: string[]

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  // ...
}
```

In the example above, the `Developer` and `Manager` classes both repeat the  `name` and `salary` properties. We could argue that we could abstract those properties to an `Employee` class that is common to all the positions in the company.

```typescript
class Employee {
  public name: string;
  public salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

class Developer {
  public employee: Employee;
  public programmingLanguage: string;

  constructor(employee: Employee, programmingLanguage: string) {
    this.employee = employee;
    this.programmingLanguage = programmingLanguage;
  }
}

class Manager {
  public managedDevelopers: string[]

  constructor(employee: Employee) {
    this.employee = employee;
  }
}

const newEmploy1 = new Employee('John', 345243)
const newEmploy2 = new Employee('Keanu', 245223)

const manager = new Manager(newEmploy1, 'sdf')
const developer = new Developer(newEmploy2, 'typescript')

```

See? We avoid repeating the same code in multiple places, allowing us a flexible and maintainable design.

In this example, the DRY principle is being applied by using an abstraction (the getTaxRate method) to centralize the logic for calculating the total pay and allowing subclasses to customize the specific details (the tax rate) as needed. This avoids repeating the same code in multiple places and allows for a more maintainable and flexible design.

## Pros

The main advantage of the DRY principle is that it helps to prevent errors and inconsistencies in your code. When you repeat the same information or code in multiple places, it becomes difficult to keep all of those instances in sync. If you need to update the information or code, you have to remember to make the same change in every place that it appears, which can be error-prone and time-consuming. By using the DRY principle, you can ensure that a single, authoritative representation of each piece of knowledge or logic is used throughout your system.

## Cons

The main disadvantage of the DRY principle is that it can lead to more complex code, because you may need to extract shared logic into separate functions or modules. This can make your code more difficult to understand and debug, especially for developers who are not familiar with the codebase. Additionally, applying the DRY principle can require more upfront planning and design, which can be time-consuming and may not always be practical in certain situations.

## Conclusions

Overall, the DRY design principle is a useful guideline for software design, but it should be applied with care and consideration for the specific needs of your system. The pros and cons of using the DRY principle should be carefully weighed to make the best decision for your project.

In summary, the DRY principle is a design guideline that emphasizes the importance of avoiding duplication in your code. By following the DRY principle, you can create code that is more modular, maintainable, and reusable, and that will be easier to work with over time.
