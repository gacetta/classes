// function getPromise(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (num2 === 0) {
//       reject('ERROR')
//     } else {
//       resolve(num1, num2)
//     }
//   })
//     .then(()=> {
//         console.log(num1 / num2)
//         return num1 / num2
//       })
//       .catch((err) => {
//         console.log(err)
//       })
// }

async function getPromise(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject('ERROR')
    } else {
      resolve({
        arg1: num1,
        arg2: num2
      })
    }
  })

  try {
    const result = await promise;
    console.log(result.arg1 / result.arg2)
    return result.arg1 / result.arg2;
  } catch (err) {
    console.log(err)
  }
}