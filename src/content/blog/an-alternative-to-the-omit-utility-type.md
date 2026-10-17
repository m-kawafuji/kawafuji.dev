---
title: An Alternative to the Omit Utility Type
date: 2025-03-15
---

TypeScript provides sevral utility types. We can efficiently construct new types
with them. `Omit<Type, Keys>` is one of them to remove specific properties from
object types.

The basic usage is like this.

```typescript
type NewType = Omit<OriginalType, "propertyToRemove">;
```

## Pitfall

There is an pitfall of the use of `Omit<Type, Keys>`. Suppose you want to remove
the `prop1` property from the `Props` interface bellow.

```typescript
interface Props {
  prop1: string;
  prop2: number;
  prop3: boolean;
  [key: string]: any;
}
```

You might think that `Omit<Type, Keys>` can achieve that like this.

```typescript
type PropsWithoutProp1 = Omit<Props, "prop1">;
```

However, the `PropsWithoutProp1` type is interpreted as following...

```typescript
type PropsWithoutProp1 = {
  [x: string]: any;
  [x: number]: any;
};
```

The `prop2` and the `prop3` properties are gone! This is not what we intended to
do!

Let's dive into `Omit<Type, Keys>` itself.

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

`Exclude<keyof Props, "prop1">` points to `string | number` because the `Prop`
type has an `string` index sigunature,
[for more details](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html).
Thus the `string` overlaps `"prop2" | "prop3"`.

## Solution

This is one of the solutions to preserve the `prop2` and the `prop3` properties
by
[re-mapping keys](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as).

```typescript
type PropsWithoutProp1 = {
  [K in keyof Props as K extends "prop1" ? never : K]: Props[K];
};
```

The resulting type is what we expected!

```typescript
type PropsWithoutProp1 = {
  [x: string]: any;
  prop2: number;
  prop3: boolean;
};
```

The `K in keyof Props` part iterates over
`"prop1" | "prop2" | "prop3" | string`, and the
`as K extends "prop1" ? never : K` part creates the resulting keys removing the
`prop1` by setting the `never` in the true branch of the conditional type.
