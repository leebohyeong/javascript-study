const person = {
     name: 'John', 
     age: 25
}

const updatePerson = {
    ...person,
    age: 30,
    city: 'seoul'
}


console.log(updatePerson);
console.log(person);