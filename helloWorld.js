// console.log("hello world");

// var a = 6;

// console.log(typeof a);

// var b = null;
// console.log(typeof b);

// var aString = "String"
// var anotherString = 'String string'

// var anObject = {
//     name : "My object",
//     size : 6
// };
// // console.log(anObject)


// var anArray = [4,5,6];
// console.log(anArray);
// console.log(anArray['0']);
// console.log(anArray.length);

// console.log("hello world".toUpperCase());

// console.log(anObject['name'].toUpperCase());

// console.log(new Date().toLocaleDateString())

// anObject.saySomething = function() {
//     console.log("hey there");
// };

// anObject.saySomething();

// function wait1SecAndSay(callback) {
//     setTimeout(callback, 1000);
// }

// wait1SecAndSay(anObject.saySomething);

// wait1SecAndSay(function() {
//     console.log("say something");
// });

// function countTo(number) {
//     for (var i = 0; i < number; i ++) {
//         console.log(i);
//     };
// };

function timeout(number) {
    console.log(number)
    if (number > 0) {
        setTimeout(function () {
            timeout(number - 1);
        }, 1000);
    };
};

timeout(6)
// undefined, null, string, number, boolean, object
// Naming convention
    // PascalCase = class name 
    // camelCase = variable
