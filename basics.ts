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

// ? Type Aliases = Not to repeat code again !
type Person =  {
  name: string
  age: number
}

let person: Person;

person = {
  name: "Freshyy",
  age: 1600
}

// ! complex types typeof : array of object !
// ! Lowercase only !
let people: Person[]

// ? Type inference
let course: string | number = "Angular - The Complete Guide"

course = 19045


// ? Function & types
function add(a: number, b: number) {
  return a + b
}

function printOutput(value: any) {
  console.log(value);
}


// ? Generics
function inersertAtBegining<T>(array: T[], value: T) {
  const newArr = [value, ...array]
  return newArr
}

const demoArr = [1, 2, 3]
 
const updatedArr = inersertAtBegining(demoArr, -1) // ~ [-1, 1, 2, 3]

// updatedArr[0].split('')

// ? Classes 
class Student {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courseName: string[]
  ) { }
  
  enroll(courseName) {
    this.courseName.push(courseName)
  }

  listCourses() {
    return this.courseName.slice()
  }
}

const newStudent = new Student('Freshyy', 'Wayne', 1600, ['Angular'])
newStudent.enroll('TypeScript')


