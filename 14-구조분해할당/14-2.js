const person = {
    name: 'Alice',
    age: 25,
    city: 'Seoul'
}

const {name, city, age} = person;
console.log(city);


const user = {
    username: "john_doe", password: "12345"
}

const { username: userId, password: userPass } = user
console.log(userId);
console.log(userPass);

const settings = {
    theme: 'dark',
    fontSize: 18
}

const {theme, fontSize=16} = settings;
console.log(fontSize)