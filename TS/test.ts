let turple: (boolean | number)[] = [false, 1, 1, 2, ]

// Type {}
const obj = {};

// Error: Property 'prop' does not exist on type '{}'.
// obj.prop = "semlinker";
obj.toString();

// type PartialPointX = { x: number; };
// interface Point extends PartialPointX { y: number; }

// interface PartialPointX { x: number; }
// type Point = PartialPointX & { y: number; };

type PartialPointX = { x: number; };

interface GenericIdentityFn<T> {
  arg: T;
}