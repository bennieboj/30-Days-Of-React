// console.log('Welcome to 30DaysOfJavaScript from external script')
// let num = prompt('Enter number')
// console.log('you entered number:', num)






//scope
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   let c = 30
//   if (true) {
//     // we can access from the function and outside the function but
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python'
//     let b = 20
//     let d = 40
//     console.log(a, b, c) // Python 20 30
//   }
//   // we can not access d because d's scope is only the if block
//   console.log(a, b) // JavaScript 10
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible





// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js',
//     ],
//     getFullName: function () {
//       return `${this.firstName} ${this.lastName}`
//     },
//   }
//   person.nationality = 'Ethiopian'
//   person.country = 'Finland'
//   person.title = 'teacher'
//   person.skills.push('Meteor')
//   person.skills.push('SasS')
//   person.isMarried = true
  
//   person.getPersonInfo = function () {
//     let skillsWithoutLastSkill = this.skills
//       .splice(0, this.skills.length - 1)
//       .join(', ')
//     let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return statement
//   }
//   console.log(person)
//   console.log(person.getPersonInfo())




// function sumAllNums() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i]
//     }
//     return sum
//   }
  
//   console.log(sumAllNums(1, 2, 3, 4)) // 10
//   console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
//   console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// const sumAllNums = (...args) => {
//     let sum = 0
//     for (const element of args) {
//       sum += element
//     }
//     return sum
//   }
  
//   console.log(sumAllNums(1, 2, 3, 4)) // 10
//   console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
//   console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173





// // a callback function, the function could be any name
// const callback = (n) => {
//   return n ** 2
// }

// // function take other function as a callback
// function cube(callback, n) {
//   return callback(n) * n
// }

// console.log(callback(3))
// console.log(cube(callback, 3))



// const numbers = [1, 2, 3]
// const [num1, num2, num3] = numbers
// console.log(num1, num2, num3) // 1, 2, 3,



// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ]
//  const [frontEnd, backEnd] = fullStack
//  console.log(frontEnd, backEnd)   //["HTML", "CSS", "JS", "React"] , ["Node", "Express", "MongoDB"]



// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums

// console.log(num1, num2, num3)
// console.log(rest)



