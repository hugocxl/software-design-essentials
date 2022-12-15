# Stable Dependencies Principle (SDP)

The stable dependencies principle is a software design principle that states
that the dependencies between modules or components should be in the direction
of stability. This means that modules or components that are more stable (i.e.
less likely to change) should depend on modules or components that are less
stable, rather than the other way around.

Here is an example of the stable dependencies principle in TypeScript:

```typescript
// A module for representing a user's profile

// An interface for representing a user's personal information
export interface PersonalInfo {
  firstName: string
  lastName: string
  email: string
  // ...
}

// An interface for representing a user's address
export interface Address {
  street: string
  city: string
  state: string
  zip: string
  // ...
}

// A class for managing a user's profile
export class UserProfile {
  constructor(public personalInfo: PersonalInfo, public address: Address) {}

  // ...
}

// A module for managing user accounts
import {UserProfile} from './user-profile'

// A class for representing a user
export class User {
  constructor(
    public username: string,
    public password: string,
    public profile: UserProfile,
  ) {}

  // ...
}
```

In this example, the User class depends on the UserProfile class, but not the
other way around. This is because the `
