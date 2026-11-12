let x = 1;

function test() {
    let x = 2;
    if (true) {
        let x = 3;
        console.log('A', x);
    }
    console.log('B', x);
}

test();
console.log('C', x);