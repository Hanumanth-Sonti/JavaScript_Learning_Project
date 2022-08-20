module.exports = class Person
{

     //constructor is a special method that gets executed as soon as an object is created for the class
    //this keyword will make variables globally accessible
    constructor(firstName,lastName){
        this.firstName = firstName,
        this.lastName = lastName
    }

    age = 25
    location = 'Canada'

    //delcaring with get will make method as property
    get Location(){
        return 'India'
    }

    fullName()
    {
        console.log( this.firstName + ' '+this.lastName )
    }
}

/* let person = new Person('John','Davi')
console.log(person.firstName)
console.log(person.lastName)
console.log(person.location)
console.log(person.Location)
console.log(person.fullName()) */