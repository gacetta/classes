const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
      throw new Error(`Unable to fetch puzzle`);
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountry(location.country);
  return country;
}

const getCountry = async (countryCode) => {
  const response = await fetch('https://restcountries.com/v3.1/all');

  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.cca2 === countryCode);
  } else {
    throw new Error('Unable to fetch country data');
  }
}

const getLocation = async () => {
  const response = await fetch('https://ipinfo.io/json?token=26672be335f2ab');

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Unable to fetch current location');
  }
}

// USING PROMISE CONSTRUCTOR (since XML doesn't support Promises)
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       resolve(data.puzzle);
//     } else if (e.target.readyState === 4) {
//       reject('An error has occurred');
//     }
//   })

//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// })

// const getPuzzleOld = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('unable to fetch puzzle');
//     }
//   }).then((data) => {
//     return data.puzzle;
//   })
// }

// const getCountryOld = (countryCode) => {
  //   return fetch('https://restcountries.com/v3.1/all').then((response) => {
  //     if (response.status === 200) {
  //       return response.json()
  //     } else {
  //       throw new Error(`Unable to fetch country data`);
  //     }
  //   }).then((data) => {
  //     return data.find((country) => country.cca2 === countryCode);
  //   })
  // }