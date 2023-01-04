// what is dynamic typing

let x = 12;

console.log(typeof x)
x = "Hej";
console.log(typeof x)

console.log(x);

// Is that good? Bad? Yes!



const foo = function(v) {
    const i = 12;
    return v + i;
}

console.log(foo(5));
console.log(foo(true));
console.log(foo("gugge"));

const arr = [1,2,3,];

// Typescript inför static types

