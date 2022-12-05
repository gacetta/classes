console.log('utilities.js')

const add = (a, b) => a + b;
const add10 = (a) => a + 10;

const square = (x) => x * x;
console.log('from my utilities code')

export { add, add10, square as default }