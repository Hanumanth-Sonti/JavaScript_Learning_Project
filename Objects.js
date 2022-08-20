//Object is a collection of properties

let person = {
    firstName: "Joe",
    lastName: "Doe"
}

//using dot notation
console.log(person.lastName)

//using array elements
console.log(person['lastName'])

//Add a new element
person['gender'] = 'Male'
console.log(person.gender)

person.age = 35
console.log(person.age)
console.log(person)

delete person.age
console.log(person)

let person2 = {
    firstName: 'Ram',
    lastName: 'Babu',
    Age: 24,
    FullName: function(){
        return this.firstName + ' '+this.lastName
    }
}

console.log(person2.FullName())