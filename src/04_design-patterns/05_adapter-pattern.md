# Adapter Pattern

The adapter pattern is a design pattern that allows two incompatible interfaces
to work together. This is often achieved by creating a wrapper class that
translates one interface into the other.

Here is an example of the adapter pattern in TypeScript:

```typescript
// Adaptee
class LegacyRectangle {
  public width: number
  public height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  public getArea(): number {
    return this.width * this.height
  }
}

// Target
interface IRectangle {
  width: number
  height: number
  getArea(): number
}

// Adapter
class RectangleAdapter implements IRectangle {
  private legacyRectangle: LegacyRectangle

  constructor(legacyRectangle: LegacyRectangle) {
    this.legacyRectangle = legacyRectangle
  }

  public get width(): number {
    return this.legacyRectangle.width
  }

  public get height(): number {
    return this.legacyRectangle.height
  }

  public getArea(): number {
    return this.legacyRectangle.getArea()
  }
}

// Client
const legacyRectangle = new LegacyRectangle(5, 10)
const rectangleAdapter = new RectangleAdapter(legacyRectangle)

console.log(rectangleAdapter.getArea()) // Output: 50
```

In this example, the LegacyRectangle class is the adaptee, which has an
incompatible interface with the target interface, IRectangle. The
RectangleAdapter class acts as the adapter, translating calls to the
LegacyRectangle class into the format expected by the IRectangle interface. The
client code can then use the RectangleAdapter class as if it were a IRectangle
object, allowing it to work with the LegacyRectangle class.
