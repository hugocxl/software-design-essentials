# Builder Pattern

The builder pattern is a design pattern that allows for the step-by-step creation of complex objects using a specific construction process. This pattern separates the construction of an object from its representation, so that the same construction process can create different representations.

In the builder pattern, a builder class is responsible for defining the construction process for the object. This builder class has a series of methods that are used to specify the different parts of the object that should be constructed. The builder class then has a build method that returns the finished object.

Here is an example of the builder pattern implemented in TypeScript:

```typescript
class Pizza {
  private topping: string;
  private sauce: string;
  private crust: string;

  setTopping(topping: string) {
    this.topping = topping;
  }

  setSauce(sauce: string) {
    this.sauce = sauce;
  }

  setCrust(crust: string) {
    this.crust = crust;
  }
}

class PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  addTopping(topping: string) {
    this.pizza.setTopping(topping);
    return this;
  }

  addSauce(sauce: string) {
    this.pizza.setSauce(sauce);
    return this;
  }

  addCrust(crust: string) {
    this.pizza.setCrust(crust);
    return this;
  }

  build() {
    return this.pizza;
  }
}

// Usage
const pizza = new PizzaBuilder()
  .addTopping("Pepperoni")
  .addSauce("Marinara sauce")
  .addCrust("Thin crust")
  .build();
```

In this example, the PizzaBuilder class is responsible for constructing a Pizza object. The Pizza class has private properties for the topping, sauce, and crust, as well as methods for setting these properties. The PizzaBuilder class has methods for adding each of these components to the pizza, as well as a build method that returns the finished Pizza object.

To use the builder pattern, a client would create a new PizzaBuilder object and then use its methods to specify the different parts of the pizza they want to construct. When the pizza is fully configured, the client can call the build method to create the Pizza object. This allows the client to construct a Pizza object in a step-by-step manner without having to worry about the details of the object's construction process.
