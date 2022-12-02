const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (response.status === 200) {
    const data = await response.json();
    return data.map((user) => {
        const [firstName, ...lastName] = user.name.split(' ');
        return {
          name: `${lastName.join(' ')}, ${firstName}`,
          email: user.email
        }
      })
  } else {
    throw new Error("You've got trouble right here in river city!")
  }
}

const getTable = async () => {
  // create table structure and add to document body
  const filteredData = await fetchData();
  console.log(filteredData);

  const tableEl = document.createElement('table');
  const tableHeadEl = document.createElement('thead');
  const tableBodyEl = document.createElement('tbody');
  const tableFootEl = document.createElement('tfoot');
  const documentBody = document.querySelector('body')

  tableEl.append(tableHeadEl, tableBodyEl, tableFootEl);
  
  documentBody.innerHTML = '<input type="button" value="Fetch Table" onclick="getTable()">\n<script src="requests.js"></script>'
  documentBody.append(tableEl)

  // create table header
  const tableHeadRowEl = document.createElement('tr')
  const tableHeadNameEl = document.createElement('th');
  const tableHeadEmailEl = document.createElement('th');

  tableHeadNameEl.textContent = 'NAME';
  tableHeadEmailEl.textContent = 'EMAIL';

  tableHeadRowEl.append(tableHeadNameEl, tableHeadEmailEl);
  tableHeadEl.append(tableHeadRowEl)



  // create table footer
  const tableFootRow = document.createElement('tr')
  const tableFootDataEl = document.createElement('td')

  tableFootDataEl.textContent = "DATA FROM: 'https://jsonplaceholder.typicode.com/users'";
  tableFootDataEl.setAttribute('colspan', '2');

  tableFootRow.append(tableFootDataEl);
  tableFootEl.append(tableFootRow)

  // create table body
  // iterate over each user
  filteredData.forEach((user) => {
    // add a row for each user
    const userRowEl = document.createElement('tr');

    // add a cell for each property
    for(const property in user) {
      const userDataEl = document.createElement('td');
      userDataEl.textContent = user[property];
      userRowEl.append(userDataEl);
    }
    
    // add row to table body
    tableBodyEl.append(userRowEl);
  })
}
// const getTable = () => {
//   return fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("You've got trouble right here in river city!")
//     }
//   }).then((data) => {
//     // filter data for only name and email fields
//     return data.map((user) => {
//       const [firstName, ...lastName] = user.name.split(' ');
//       return {
//         name: `${lastName.join(' ')}, ${firstName}`,
//         email: user.email
//       }
//     })
//   }). then((filteredData) => {
//     // create table structure and add to document body
//     const tableEl = document.createElement('table');
//     const tableHeadEl = document.createElement('thead');
//     const tableBodyEl = document.createElement('tbody');
//     const tableFootEl = document.createElement('tfoot');
//     const documentBody = document.querySelector('body')

//     tableEl.append(tableHeadEl, tableBodyEl, tableFootEl);
    
//     documentBody.innerHTML = '<input type="button" value="Fetch Table" onclick="getTable()">\n<script src="requests.js"></script>'
//     documentBody.append(tableEl)

//     // create table header
//     const tableHeadRowEl = document.createElement('tr')
//     const tableHeadNameEl = document.createElement('th');
//     const tableHeadEmailEl = document.createElement('th');

//     tableHeadNameEl.textContent = 'NAME';
//     tableHeadEmailEl.textContent = 'EMAIL';

//     tableHeadRowEl.append(tableHeadNameEl, tableHeadEmailEl);
//     tableHeadEl.append(tableHeadRowEl)



//     // create table footer
//     const tableFootRow = document.createElement('tr')
//     const tableFootDataEl = document.createElement('td')

//     tableFootDataEl.textContent = "DATA FROM: 'https://jsonplaceholder.typicode.com/users'";
//     tableFootDataEl.setAttribute('colspan', '0');

//     tableFootRow.append(tableFootDataEl);
//     tableFootEl.append(tableFootRow)

//     // create table body
//     // iterate over each user
//     filteredData.forEach((user) => {
//       // add a row for each user
//       const userRowEl = document.createElement('tr');

//       // add a cell for each property
//       for(const property in user) {
//         const userDataEl = document.createElement('td');
//         userDataEl.textContent = user[property];
//         userRowEl.append(userDataEl);
//       }
      
//       // add row to table body
//       tableBodyEl.append(userRowEl);
//     })

//   })
// }