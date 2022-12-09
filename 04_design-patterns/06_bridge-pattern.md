# Bridge Pattern

The bridge pattern is a design pattern that separates the abstraction and the implementation of an object. This allows the two to vary independently, providing more flexibility in the design of the system.

Here is an example of the bridge pattern in TypeScript:

``` typescript
// Abstraction
abstract class Shape {
  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract draw(): void;
}

// RefinedAbstraction
class Circle extends Shape {
  private radius: number;

  constructor(color: Color, radius: number) {
    super(color);
    this.radius = radius;
  }

  public draw(): void {
    this.color.applyColor();
    // Draw circle...
  }
}

// Implementor
interface Color {
  applyColor(): void;
}

// ConcreteImplementor
class Blue implements Color {
  public applyColor(): void {
    // Apply blue color...
  }
}

// Client
const blueCircle = new Circle(new Blue(), 5);
blueCircle.draw();
```

In this example, the Shape class is the abstraction, while the Color interface represents the implementor. The Circle class is a refined abstraction, providing a more specific implementation of the Shape class. The Blue class is a concrete implementor, providing a specific implementation of the Color interface.

The client code can create a Circle object with a specific Color, allowing the color to be changed independently of the circle's implementation. This allows for more flexibility in the design of the system.
