const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  }
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.get());

// Adder

const createAdder = (a) => {
  return (b) => {
    return a + b;
  }
}

const add10 = createAdder(10);
console.log(add10(5))
const add100 = createAdder(100);
console.log(add100(17))

// Tipper

// 1. Create createTipper which takes in the base tip (.15 for 15% tip)
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate a few functions for different percentages
// 4. Use the generated functions to calculate tips and print them

const createTipper = (tipAmt) => {
  return (billAmt) => {
    return `A ${tipAmt * 100}% tip on \$${billAmt} is \$${billAmt * tipAmt}.`
  }
}

const tip15 = createTipper(.15);
const tip20 = createTipper(.20);
const tipBig = createTipper(.50);
console.log(tip15(100))
console.log(tipBig(100))
console.log(tip20(100))