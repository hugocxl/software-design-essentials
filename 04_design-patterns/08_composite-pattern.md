# Composite Pattern

The composite pattern is a design pattern that allows you to compose objects
into tree-like structures to represent part-whole hierarchies. This pattern lets
clients treat individual objects and compositions of objects uniformly.

Here is an example of the composite pattern implemented in TypeScript:

```typescript
abstract class Component {
  protected parent: Component

  public setParent(parent: Component): void {
    this.parent = parent
  }

  public getParent(): Component {
    return this.parent
  }

  public add(component: Component): void {}

  public remove(component: Component): void {}

  public isComposite(): boolean {
    return false
  }

  public abstract operation(): string
}

class Leaf extends Component {
  public operation(): string {
    return 'Leaf'
  }
}

class Composite extends Component {
  protected children: Component[] = []

  public add(component: Component): void {
    this.children.push(component)
    component.setParent(this)
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component)
    this.children.splice(componentIndex, 1)

    component.setParent(null)
  }

  public isComposite(): boolean {
    return true
  }

  public operation(): string {
    const results = []
    for (const child of this.children) {
      results.push(child.operation())
    }

    return `Branch(${results.join('+')})`
  }
}
```

In this example, the Component class represents the base class for both
composite and leaf objects in the composition. The Leaf class represents the
leaf objects in the composition, which have no children. The Composite class
represents the composite objects in the composition, which have children.

Using the composite pattern, you can create tree-like structures of objects and
treat them uniformly, whether they are individual objects or compositions of
objects.
