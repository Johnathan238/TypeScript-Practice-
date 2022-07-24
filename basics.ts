// ^ Primirives: number, string, boolean
// ^ More complex types: arrays , objects
// ^ Function types, parameters

// ? Primitives

// ! Primitive typeof : number only !
// ! Lowercase only !
let age: number 

age = 12

// ! Primitive typeof : string only !
// ! Lowercase only !
let userName: string

userName = "Freshyy"


// ! Primitive typeof : boolean only !
// ! Lowercase only !
let isStudent: boolean

isStudent = false


// ? More complex types

// ! complex types typeof : array only !
// ! Lowercase only !
let hobbies: string[]

hobbies = ['Football', 'Cooking', 'Cars']

// ! complex types typeof : object only !
// ! Lowercase only !
let person: {
  name: string
  age: number
}

person = {
  name: "Freshyy",
  age: 1600
}

// ! complex types typeof : array of object !
// ! Lowercase only !
let people: {
  name: string
  age: number
}[]

// ? Type inference
let course: string | number = "Angular - The Complete Guide"

course = 19045



