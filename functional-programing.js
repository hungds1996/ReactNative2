const x = 6;

// pure function

const addY = x => x + y; // impure
const pureAdd = (x, y) => x + y;

const randomDouble = x => Math.random() * x;

const addALot = x => {
    const a = pureAdd(x, 1);
    const b = pureAdd(x, 2);
    const c = pureAdd(x, 3);
    const z = x > 6 ? pureAdd(x, 2) : pureAdd(x, 100);
     
    return a + b + c;
};

