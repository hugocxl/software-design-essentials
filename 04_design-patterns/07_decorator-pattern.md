# Decorator Pattern

The decorator pattern is a design pattern that allows additional behavior to be added to an existing object dynamically. This is achieved by wrapping the original object with a decorator object that provides the additional behavior.

Here is an example of the decorator pattern in TypeScript:

```typescript
// Component
abstract class Beverage {
  public description: string = "Unknown beverage";

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

// ConcreteComponent
class Espresso extends Beverage {
  public description: string = "Espresso";

  public cost(): number {
    return 1.99;
  }
}

// Decorator
abstract class CondimentDecorator extends Beverage {
  public abstract getDescription(): string;
}

// ConcreteDecorator
class Mocha extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }

  public cost(): number {
    return 0.20 + this.beverage.cost();
  }
}

// Client
const espresso = new Espresso();
console.log(espresso.getDescription()); // Output: "Espresso"
console.log(espresso.cost()); // Output: 1.99

const mochaEspresso = new Mocha(espresso);
console.log(mochaEspresso.getDescription()); // Output: "Espresso, Mocha"
console.log(mochaEspresso.cost()); // Output: 2.19
```

In this example, the Beverage class is the component, which provides the basic behavior for a beverage. The Espresso class is a concrete component, which provides a specific implementation of the Beverage class.

The CondimentDecorator class is the decorator, which extends the Beverage class and adds additional behavior. The Mocha class is a concrete decorator, which adds the behavior of a mocha to a Beverage object.

The client code can create a Espresso object and then wrap it with a Mocha object, adding the behavior of a mocha to the espresso. This allows for the behavior of the espresso to be changed dynamically, without
