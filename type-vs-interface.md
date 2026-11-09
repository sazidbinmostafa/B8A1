# Type vs Interface in TypeScript

## What's the Difference?

TypeScript provides two powerful ways to define custom types. One is called a **Type Alias**, and the other is called an **Interface**. Both help developers describe the structure of data and make applications more predictable. Although they look similar, they have some important differences.

## Understanding Type and Interface

An **Interface** is mainly used to define the structure of objects. It describes which properties and methods an object should contain. It is recommeded to use mostly if possible.

```ts
interface User {
  name: string;
  age: number;
}
```

A **Type Alias** can also define object structures, but it is more flexible. It can represent primitive types, unions, intersections, tuples, and other types.

```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

One major difference is that interfaces support **Declaration Merging**. If we declare multiple interfaces with the same name, TypeScript automatically merges them. We can also extend the interfaces using **extends**. But we can't declare multiple type aliasses with the same name, It shows error.

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}
```

Now, `Person` contains both `name` and `age` properties. However, we cannot redeclare a type alias with the same name.

## Conclusion

We shuould use interfaces when defining object structures, especially when working with classes or extensible APIs. And we should choose type aliases when working with unions, tuples, primitives, or more complex type combinations. Both are useful, and the best choice depends on the situation.