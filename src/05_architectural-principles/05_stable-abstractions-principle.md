# Stable Abstractions Principle (SAP)

The stable abstractions principle is a software design principle that states
that the more stable a component is, the more abstract it should be. This means
that the most stable components in a system should provide the most general and
reusable services, whereas the less stable components should provide more
specific and specialized services.

Here is an example of the stable abstractions principle in TypeScript:

```typescript
// A module for representing geometric shapes

// An abstract class for representing a geometric shape
export abstract class Shape {
  // Calculate the area of the shape
  public abstract area(): number

  // Calculate the perimeter of the shape
  public abstract perimeter(): number
}

// A class for representing a rectangle
export class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  // Calculate the area of the rectangle
  public area(): number {
    return this.width * this.height
  }

  // Calculate the perimeter of the rectangle
  public perimeter(): number {
    return 2 * (this.width + this.height)
  }
}

// A class for representing a circle
export class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  // Calculate the area of the circle
  public area(): number {
    return Math.PI * this.radius * this.radius
  }

  // Calculate the perimeter of the circle
  public perimeter(): number {
    return 2 * Math.PI * this.radius
  }
}
```

In this example, the Shape class is the most stable component in the system, as
it provides the most general and abstract representation of a geometric shape.
It defines the common interface (area and perimeter) that all shapes must
implement, and it does not provide any specific implementation details. This
makes the Shape class highly reusable and independent of the specific details of
any particular shape.

The Rectangle and Circle classes, on the other hand, are less stable components
in the system, as they provide more specific and specialized representations of
a rectangle and a circle, respectively. These classes extend the Shape class and
provide the specific implementation details (e.g. the formulas for calculating
the area and perimeter of a rectangle or a circle) that are required to
represent these shapes. This makes the Rectangle and Circle classes less
reusable and more dependent on the specific details of the shapes that they
represent.

Overall, this example demonstrates the stable abstractions principle by showing
that the most stable component (the Shape class) is the most abstract and
reusable, whereas the less stable components (the Rectangle and Circle classes)
are more specific and specialized. This can help to improve the modularity,
reusability, and maintainability of the system.
