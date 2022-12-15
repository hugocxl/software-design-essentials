# Prototype Pattern

The prototype pattern is a design pattern that is used in software development
to create new objects by copying existing objects. The prototype pattern allows
objects to be created quickly and efficiently, without the need to create new
objects from scratch.

In the prototype pattern, an existing object, called the prototype, is used as
the basis for creating new objects. The prototype object has the properties and
behavior that the new objects will have, and the new objects are created by
copying the prototype. This allows the new objects to inherit the properties and
behavior of the prototype, without having to define them from scratch.

Here is an example of the prototype pattern implemented in TypeScript:

```typescript
class Prototype {
  public primitive: any
  public component: object
  public circularReference: object

  public clone(): this {
    const clone = Object.create(this)

    clone.component = Object.create(this.component)
    clone.circularReference = {
      ...this.circularReference,
      prototype: {...this},
    }

    return clone
  }
}

class ConcretePrototype1 extends Prototype {
  constructor(prototype: Prototype) {
    super()
    this.primitive = prototype.primitive
    this.component = prototype.component
    this.circularReference = prototype.circularReference
  }
}

const prototype = new ConcretePrototype1(new Prototype())

const clone = prototype.clone()

console.log(prototype.primitive === clone.primitive) // true
console.log(prototype.component === clone.component) // false
console.log(prototype.circularReference === clone.circularReference) // false
console.log(
  prototype.circularReference.prototype === clone.circularReference.prototype,
) // true
```

In this example, the `Prototype` class defines the prototype object that will be
used to create new objects. The `Prototype` class has a `clone` method that is
used to create new objects by copying the prototype. The ConcretePrototype1
class extends the Prototype class and defines a concrete implementation of the
prototype.

To use the prototype pattern, a client would create a new Prototype object and
then call the clone method to create a new object based on the prototype. The
new object will have the same properties and behavior as the prototype, but will
be a separate object with its own identity. This allows the client to create new
objects quickly and efficiently, without having to define their properties and
behavior from scratch.
