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

// type PartialPointX = { x: number; };

// interface GenericIdentityFn<T> {
//   arg: T;
// }

// interface X {
//   type: number,
//   a: string,
//   b: number
// }
// interface Y {
//   type: string,
//   a: string,
//   d: boolean
// }
// type XY = X & Y
// let p: XY = { type: '123', a:'567', b: 123 }; 

// type a  = {
//   b: 'string',
//   d: number
// }
// type b =  {
//   b: number,
//   c: string
// }

// type xy = a & b
// let q: xy = { b: 789, d:1, c:'23'}



// interface X {
//   c: string;
//   d: string;
// }

// interface Y {
//   c: number;
//   e: string
// }

// type XY = X & Y;
// type YX = Y & X;

// let p: XY;
// let q: YX;

// p = { c: 6, d: "d", e: "e" }; 

// q = { c: "c", d: "d", e: "e" }; 



interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

// type PowerUser = Omit<User & Admin, 'type'> & { type: 'powerUser' }; 
type PowerUser = Omit<User & Admin, 'type'>; 
export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  // {
  //     type: 'powerUser',
  //     name: 'Nikki Stone',
  //     age: 45,
  //     role: 'Moderator',
  //     occupation: 'Cat groomer'
  // },
  {
    // type: 'powerUser',
    name: 'Nikki Stone',
    age: 45,
    role: 'Moderator',
    occupation: 'Cat groomer'
}
];


