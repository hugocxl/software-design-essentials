# Template Pattern

The template pattern is a behavioral design pattern that defines the skeleton of
an algorithm in a method, called the template method, and defers the
implementation of some steps to subclasses. This pattern lets you define the
common parts of an algorithm once, and then let subclasses implement the
details.

Here is an example of the template pattern implemented in TypeScript:

```typescript
abstract class AbstractClass {
  public templateMethod(): void {
    this.baseOperation1()
    this.requiredOperations1()
    this.baseOperation2()
    this.hook1()
    this.requiredOperation2()
    this.baseOperation3()
    this.hook2()
  }

  protected baseOperation1(): void {
    console.log('AbstractClass says: I am doing the bulk of the work')
  }

  protected baseOperation2(): void {
    console.log(
      'AbstractClass says: But I let subclasses override some operations',
    )
  }

  protected baseOperation3(): void {
    console.log(
      'AbstractClass says: But I am doing the bulk of the work anyway',
    )
  }

  protected abstract requiredOperations1(): void

  protected abstract requiredOperation2(): void

  protected hook1(): void {}

  protected hook2(): void {}
}

class ConcreteClass1 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log('ConcreteClass1 says: Implemented Operation1')
  }

  protected requiredOperation2(): void {
    console.log('ConcreteClass1 says: Implemented Operation2')
  }
}

class ConcreteClass2 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log('ConcreteClass2 says: Implemented Operation1')
  }

  protected requiredOperation2(): void {
    console.log('ConcreteClass2 says: Implemented Operation2')
  }

  protected hook1(): void {
    console.log('ConcreteClass2 says: Overridden Hook1')
  }
}
```

In this example, the AbstractClass defines the templateMethod(), which contains
the common parts of the algorithm, as well as some methods that are either
already implemented or have default implementations (baseOperation1(),
baseOperation2(), baseOperation3(), hook1(), and hook2()). The AbstractClass
also defines some methods that need to be implemented by subclasses
(requiredOperations1() and requiredOperation2()).
