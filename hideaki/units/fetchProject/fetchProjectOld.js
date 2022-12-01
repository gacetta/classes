const getTableData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // handle response data
  if (response.status === 200) {
      const data = await response.json();
      return data;
  } else {
    throw new Error('ya done got a problem')
  }
}

const constructTable = async () => {
  const data = await getTableData();
  console.log(data)
  // filter response data to contain name & email only
  const filteredData = data.map((user) => {
      const [firstName, ...lastName] = user.name.split(' ');
      return {
        name: `${lastName.join(' ')}, ${firstName}`,
        email: user.email
      }
    })
  
  // create table
  const tableEl = document.createElement('table');
  const tableBodyEl = document.createElement('tbody');

  // create table data for each user
  filteredData.forEach((user) => {
    // create a row of data for each property
    for (const property in user) {
      // create a row and two cells
      const rowEl = document.createElement('tr');
      const propEl = document.createElement('td')
      const valueEl = document.createElement('td')
      
      // set TextContent for cells
      propEl.textContent = `${property}:`;
      valueEl.textContent = user[property];

      // append cells to row
      rowEl.append(propEl, valueEl)
      // append row to tableBody
      tableBodyEl.append(rowEl);
    }
  })
  // append tableBody to tableEl
  tableEl.append(tableBodyEl);
  // append tableEl to the document body
  document.querySelector('body').append(tableEl);
}

// function getTableData() {
//   return fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('ya done got a problem')
//     }
//   }).then((data) => {
//     return data.map((user) => {
//       const [firstName, ...lastName] = user.name.split(' ');
//       return {
//         name: `${lastName.join(' ')}, ${firstName}`,
//         email: user.email
//       }
//     })
//   }).then((filteredData) => {
//     // create table
//     const tableEl = document.createElement('table');
//     const tableBodyEl = document.createElement('tbody');
//     filteredData.forEach((user) => {
//       // create row
//       // row 1 - name:   /   user.name
//       // row 2 - email:  /   user.email
//       for (const property in user) {
//         console.log(user[property])
//         // create a row and two cells
//         const rowEl = document.createElement('tr');
//         const propEl = document.createElement('td')
//         const valueEl = document.createElement('td')
        
//         // create TextContent for cells
//         propEl.textContent = `${property}:`;
//         valueEl.textContent = user[property];

//         // append row to table body
//         rowEl.append(propEl, valueEl)
//         tableBodyEl.append(rowEl);
//       }
//     })
    
//     tableEl.append(tableBodyEl);
//     document.querySelector('body').append(tableEl);
//   })
// }