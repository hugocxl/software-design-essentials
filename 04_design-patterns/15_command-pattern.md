# Command Pattern

The command pattern is a software design pattern in which an object is used to represent and encapsulate all the information needed to call a method at a later time. This allows for deferred execution of methods, as well as the ability to queue multiple methods for execution and to execute the methods in a different order or in a different context.

Here is an example of the command pattern implemented in TypeScript:

```typescript
// The command interface defines a method for executing a command.
interface Command {
  execute(): void;
}

// The concrete command class defines a binding between a receiver object
// and an action. It implements the execute method by invoking the
// corresponding method on the receiver.
class ConcreteCommand implements Command {
  private receiver: Receiver;
  private action: string;

  constructor(receiver: Receiver, action: string) {
    this.receiver = receiver;
    this.action = action;
  }

  execute() {
    this.receiver[this.action]();
  }
}

// The receiver class defines the actions that can be performed.
class Receiver {
  action1() {
    // ...
  }

  action2() {
    // ...
  }
}

// The invoker class knows how to execute a command, and maintains a
// history of executed commands.
class Invoker {
  private history: Command[] = [];

  executeCommand(command: Command) {
    this.history.push(command);
    command.execute();
  }

  undo() {
    const command = this.history.pop();
    command.undo();
  }
}
```

In this example, the ConcreteCommand class defines a binding between a Receiver object and an action that the receiver can perform. The Invoker class maintains a history of executed commands and provides methods for executing and undoing those commands. This allows clients of the Invoker to execute methods on the receiver without knowing the details of how those methods are implemented. It also allows the execution of the commands to be deferred and for the order of execution to be changed.
