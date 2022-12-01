function resolve(num1, num2) {
  console.log('\nRESOLVE FUNC BLOCK')
  return num1 / num2;
}

function reject(message) {
  console.log('\nREJECT FUNC BLOCK')
  // console.log(message);
  return message;
}

function returnPromise(num1, num2) {
  console.log('\nRETURN PROMISE')
  return new Promise(function(resolve, reject) {
    if (num2 === 0) {
      reject('Error - denominator is 0')
    } else {
      resolve(num1, num2)
    }
  });
}