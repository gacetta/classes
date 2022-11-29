// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       console.log(data)
//       resolve(data.puzzle)
//     } else if (e.target.readyState === 4) {
//       reject('An Error has taken place')
//     }
//   }) 
  
//   request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);      //details of the request
//   request.send();       //send off the request
// })
// const getPuzzleOld = (wordCount) => {
//   return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error ('An Error has taken place')
//     }
//   }).then((data) => {
//     return data.puzzle;
//   })
// }

const getPuzzle = async (wordCount) => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

  if (response.status === 200) {
    const data = await response.json();
    console.log(data.puzzle);
    return data.puzzle;
  } else {
    throw new Error('something wrong')
  }
}

// const getPokemonOld = (name) => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error ('an error occurred')
//     }
//   }).then((data) => {
//     console.log(data.name);
//     return data;
//   })
// }

// const getPokemon = async (name) => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

//   if (response.status === 200) {
//     const pokemon = await response.json();
//     return pokemon.name;
//   } else {
//     throw new Error ('an error occurred')
//   }
// }

// const getLocation = async () => {
//   const response = await fetch('https://ipinfo.io/json?token=26672be335f2ab');

//   if (response.status === 200) {
//     return await response.json();
//   } else {
//     throw new Error('something went down yo')
//   }
// } 

// const getLocationOld = () => {
//   return fetch('https://ipinfo.io/json?token=26672be335f2ab').then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('ya fucked');
//     }
//   })
// } 