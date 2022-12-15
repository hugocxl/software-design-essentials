# Iterator Pattern

The iterator pattern is a software design pattern that allows elements of a
collection to be accessed sequentially without exposing the underlying
representation of the collection. This pattern is often used to provide a
standard interface for traversing different types of collections, such as
arrays, linked lists, and trees.

Here is an example of the iterator pattern implemented in TypeScript:

```typescript
// The interface defining the iterator's behavior.
interface Iterator {
  hasNext(): boolean
  next(): any
}

// The concrete iterator class maintains a reference to the current
// position in the traversal of the collection and provides the
// next element in the traversal.
class ConcreteIterator implements Iterator {
  private index: number
  private collection: any[]

  constructor(collection: any[]) {
    this.index = 0
    this.collection = collection
  }

  hasNext() {
    return this.index < this.collection.length
  }

  next() {
    const item = this.collection[this.index]
    this.index += 1
    return item
  }
}

// The aggregate interface defines methods for creating and returning
// an iterator object.
interface Aggregate {
  createIterator(): Iterator
}

// The concrete aggregate class maintains a collection of objects and
// provides an iterator object for traversing the collection.
class ConcreteAggregate implements Aggregate {
  private items: any[] = []

  createIterator() {
    return new ConcreteIterator(this.items)
  }

  addItem(item: any) {
    this.items.push(item)
  }
}
```

In this example, the ConcreteIterator class maintains a reference to the current
position in the traversal of a collection and provides the next element in the
traversal. The ConcreteAggregate class maintains a collection of objects and
provides an iterator object for traversing the collection. The Aggregate
interface defines methods for creating and returning an iterator object, which
allows different types of collections to be traversed in a consistent way. This
allows clients of the iterator to access the elements of the collection without
knowing the underlying representation of the collection.
