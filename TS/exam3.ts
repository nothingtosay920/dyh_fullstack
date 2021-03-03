/*

Exercise:

    Fix type errors in logPerson function.

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.

*/

interface User {
  name: string;
  age: number;
  occupation : string;
}

interface Admin {
  name: string;
  age: number;
  role : string;

}

export type Person = User | Admin;

export const persons: Person[] = [
  {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep'
  },
  {
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator'
  },
  {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
  },
  {
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver'
  }
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  // if ((<Admin>person).role) {
  //     additionalInformation = (<Admin>person).role;
  // } else {
  //     additionalInformation = (<User>person).occupation;
  // }
  if ('role' in person) {
      // person会自动推导为 Admin
      additionalInformation = person.role;
  } else {
        additionalInformation = person.occupation;
    }

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-the-in-operator
