# Single Responsabiliy Principle (SRP)

The Single Responsibility Principle (SRP) is a design guideline that states that a class should have one, and only one, reason to change. This means that a class should have a single, well-defined responsibility, and should not be responsible for multiple things.

The SRP is based on the idea that classes with multiple responsibilities are often more difficult to maintain and modify than classes with a single responsibility. This is because changes to one part of the class can affect other parts of the class, which can lead to unexpected behavior or errors. Additionally, classes with multiple responsibilities can be more difficult to understand and work with, as they may have complex interactions or dependencies between their different responsibilities.

To follow the SRP in your software development, you should strive to create classes that have a single, well-defined responsibility. This means identifying the core responsibility of each class, and designing your code so that each class only has one reason to change. For example, if you have a class that is responsible for both saving data to a database and sending email notifications, you should consider splitting that class into two separate classes, each with its own single responsibility.

One way to ensure that your classes follow the SRP is to use the Single Responsibility Principle Checklist.
