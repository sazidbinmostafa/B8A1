# Type Narrowing in TypeScript

## What is Type Narrowing?

TypeScript is a statically typed programming language that helps developers write safer JavaScript code. Sometimes, a variable can have multiple possible types. Type Narrowing is a technique that helps TypeScript identify the specific type of a variable within a particular condition. It allows us to perform operations safely without causing unexpected type errors.

## Understanding Type Narrowing

There are several ways to perform Type Narrowing in TypeScript. Three commonly used approaches are `typeof`, `instanceof`, and the `in` operator.

**1. Using typeof**

The `typeof` operator checks the type of a variable at runtime. It is commonly used with primitive types such as strings, numbers, and booleans.

```ts
function processInput(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else {
    console.log(value * 10);
  }
}
```

**2. Using instanceof**

The `instanceof` operator checks whether an object belongs to a particular class.

```ts
class Bird {
  fly(): void {
    console.log("I can fly pretty fast");
  }
}
class Fish {
  swim(): void {
    console.log("I can swim pretty fast");
  }
}

const moveAnimal = (animal: Bird | Fish): void => {
  if (animal instanceof Bird) {
    animal.fly();
  }
  else{
    animal.swim()
  }
}
```

**3. Using the in operator**

The `in` operator checks whether an object contains a particular property.

```ts
type Admin = { role: string };
type User = { name: string };

function identify(person: Admin | User): void {
  if ("role" in person) {
    console.log(person.role);
  }
}
```

## Conclusion

Type Narrowing makes TypeScript applications safer and easier to maintain. The `typeof`, `instanceof`, and `in` operators help developers identify specific types and avoid invalid operations. Understanding these techniques is essential when working with union types and complex objects.