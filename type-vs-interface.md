# What are the core differences between type aliases and interfaces in TypeScript? When should you choose one over the other?


### Introduction

In typescript,ee can define types in many ways.The most common ways are type alias and interface.Although they look almost same, they have some difference.In this blog, we will see how they look, their uses and difference.



They have different syntax, as given below:

**Type Alias:**
```typescript
type User = {
    name: string;
    age: number;
    isMarried: boolean;
};
```

**Interface:**
```typescript
interface User {
    name: string;
    age: number;
    isMarried: boolean;
}
```

### When to use Type Alias and Interface?

Type alias provides better flexibilty as it can be used with primitive types, objects, tuples, unions, and intersections. For example, wc can create custom type using type alias that accepts either a string or a number.

On the other hand,to define objects we mostly used interface. We can also use the extends keyword with interface to inherit properties from another interface.

### The key difference:
One of the most important difference is declaration merging and interfces support it. When we declare many interfaces with the same name, TypeScript consider them into one interface. But type aliases do not support declaration merging.

### Conclusion:
Type aliases and interfaces both have their individual advantage in typeScript. We can use interface when we declare objects. But when working with unions, tuples, or primitive types, type aliases are a better choice. So, we can choose between them depending on what we need in our code.