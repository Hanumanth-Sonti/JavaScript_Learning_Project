//Inheritance is mechanism through which one class acquires the properties of any other class
//The class that inherits the propeties and methods of other class is called Sub Class
//The class whose properties are inherited is called Super Class

const person = require('./cl_def')

class Pet extends person
{
    //Parent and Child class should have same constructor
    constructor(firstName,lastName){
       //Call parent class constructor as first step in child class constructor
       super(firstName,lastName)
    }

     get getLocation(){
        return 'BlueCross'
    }
} 

let pet = new Pet('Coco','Cabana')
console.log(pet.firstName)
console.log(pet.lastName)
console.log(pet.fullName())
console.log(pet.getLocation)

