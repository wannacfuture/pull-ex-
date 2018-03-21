// type a = string

// function b(c: a): string {
//   const d: a = 'e'
//   return d
// }

// interface Pet {
//   readonly name: string
//   type?: string
//   sound?: (volume: number) => string
//   [propName: string]: any
// }

// const pets: Pet[] = [
//   {
//     name: 'wuffi',
//     type: 'dog',
//     sound: (vol: number) => `${this.name} in vol: ${vol}`
//   },
//   {
//     name: 'piepsi'
//   },
//   {
//     name: 'oinki',
//     type: undefined
//   },
//   {
//     name: 'miezi',
//     age: 10
//   }
// ]

// function getPets(): ReadonlyArray<Pet> {
//   return pets
// }

// getPets().push({}) // Error: Push does not exist on ReadonlyArray

// const names: string = getPets()
//   .map(pet => pet.name)
//   .join(', ')

// pets[0].name = 'peter' // Error: Cannot assign

// enum Color {
//   Black,
//   White
// }

// function getCars(): { model: string; color: Color }[] {
//   return [
//     {
//       model: 'X',
//       color: Color.Black
//     }
//   ]
// }
