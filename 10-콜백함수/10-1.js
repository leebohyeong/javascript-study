function greet(name, callback) {
    console.log('hello ' + name);
    callback();
}

function afterGreeting() {
    console.log('Nice to meet you');
}

greet('Alice', afterGreeting);