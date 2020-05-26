let person = {
    name: 'Christel',
    age: 26
};

let greetings = {
    greeting: "Hi I'm an object"
}

let evaluations = [7,10,9];
let colors = ["green", "blue", "yellow"];

colors.push("red");
colors.push(5);
colors.push(greetings);


console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(evaluations);
console.log(person.age);
