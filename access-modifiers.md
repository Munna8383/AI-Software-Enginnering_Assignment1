
# Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.


### Introduction:
In typescript,when we work with classes, we need to control the access of the properties or methods using access modfiers.There are four commonly used modifiers: public, private, protected, and readonly. In this blog we will see how they work with some examples. 

**1. Public:**

```typescript
class Person {
    public name: string = "Munna";

    public displayName() {
        console.log(this.name);
    }
}

const person = new Person();

console.log(person.name); // Munna
person.displayName();     // Munna

```

So, here name and displayName() are public, and they can be accessed from outside the class.

**2. Private:**

```typescript
class Person {
    private salary: number = 30000;

    public getSalary(): number {
        return this.salary;
    }
}

const person = new Person();

console.log(person.getSalary()); // 30000

// console.log(person.salary); // Error

```

Here, salary is private, so we cannot access it directly from outside the class. However, we can access it through the public getSalary() method.

**3. Protected:**

```typescript
class Person {
    protected name: string = "Munna";
}

class Student extends Person {
    public displayName(): void {
        console.log(this.name);
    }
}

const student = new Student();

student.displayName(); // Munna

// console.log(student.name); // Error

```

Here, name is protected, so the child class Student can access it through inheritance, but we cannot access it directly from outside the class.

**4. Readonly:** 

```typescript
class Person {
    readonly country: string = "Bangladesh";

    constructor(public name: string) {}

    displayInfo(): void {
        console.log(this.name, this.country);
    }
}

const person = new Person("Munna");

console.log(person.country); // Bangladesh

// person.country = "USA"; // Error
```

Here, country is readonly, so we can read its value but cannot change it after initialization.

### Conclusion:

In OOP typescript, access modifiers provides control how methos or properties are accessed or modfied. Public can be accessed from anywhere whereas private can only be accessed within the class.However,protected can be accessed inside the class and child classes.Finally,when we use readonly, its value cannot be modfied.Overall,modifiers help us write more organized and secure code.