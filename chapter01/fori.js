for (var i = 1; i < 10; i++) {
    console.log(i);
}
console.log(i);


// let으로 하면 블럭스코프가 보장된다.
for (let letVar = 1; letVar < 10; letVar++) {
    console.log(letVar);
}
console.log(letVar); // letVar is not defined