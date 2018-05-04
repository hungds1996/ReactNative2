var a = 6; // function scope
let b = 7; // block scope

const c = 10; // block scope constant
const obj = {
    name: "Hung"
};

obj.name = "Sy Hung";

function sayHello() {
    console.log('Hello');
};

const anotherSayHello = function() {
    console.log("hello");
};

const printANumber = function(number) {
    console.log("number");
};

const addNumber = (a, b) => {
    return a + b;
};

const anotherAddNumber = (a, b) => a + b;

const arrowPrintANumber = number => {
    console.log(number);
};

const anotherArrowPrintANumber = number => console.log(number);

// Currying
const creatAddNumber = number1 => {
    return function(number2) {
        return number2 + number1;
    };
};

const anotherCreateAddNumber = number1 => number2 => number1 + number2;

const username = "Hung";
const string1 = "hello" + username + "asdadsasd";
const string2 = `Hellllllo ${username}, ha ha ha ha`;

const age = 22;
console.log(`you are ${age > 30 ? "old" : "young"}`) //tenary operator

// Big 3 function
const numbers = [1, 2, 4, 7, 10];

// Map 
const doubles = numbers.map(number => number * 2);
        // tao ra 1 array bang array cu voi gia tri duoc thay lai 

// Filter
const playlist = ["lac troi", "em cua ngay hom qua"];

const fav = playlist.filter(song => song.includes("Troi"));

// Reduce
const sum = numbers.reduce((sum, number) => number + sum, 0);
console.log(sum)