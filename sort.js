var anArray = []

var step = Math.random()

function randInt(max, min) {
    if (anArray.length < 10) {
        a = Math.floor(Math.random() * (max - min) + min);
        anArray.push(a)
        randInt(max, min)
    };
};

randInt(100, 90)
console.log(anArray)