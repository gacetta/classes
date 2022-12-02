// function getPromise(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (num2 === 0) {
//       reject('ERROR - YA FUCKED');
//     } else {
//       resolve([num1, num2]);
//     }
//   }).then((data) => {
//     console.log(data)
//     console.log(data[0] / data[1])
//   }).catch((err) => {
//     console.log(err)
//   })
// }

async function getPromise(num1, num2) {
  const response = new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject('ERROR async fuckery')
    } else {
      resolve([num1, num2])
    }
  })

  try {
    const data = await response;
    console.log(data[0] / data[1])
    return data[0] / data[1]
  } catch (err) {
    console.error(err)
  }
}