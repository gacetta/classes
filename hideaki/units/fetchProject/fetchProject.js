// return the name and email of all users

const getTableData = async () => {
  const response =  await fetch('https://jsonplaceholder.typicode.com/users')
    
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
    throw new Error('something went terrible awry')
  }
}

const createTable = async () => {
  // build a table using the fetched data
  const filteredData = await getTableData();

  // create table elements
  const tableEl = document.createElement('table')
  const tableBodyEl = document.createElement('tbody')
  const tableHeadRow  = document.createElement('tr')

  // set tableHead text
  const tableHeadNameEl = document.createElement('td').textContent = 'NAME'
  const tableHeadEmailEl = document.createElement('td').textContent = 'EMAIL'
  tableHeadRow.append(tableHeadNameEl, tableHeadEmailEl);
  tableBodyEl.append(tableHeadRow);
  console.log(tableBodyEl)

  // create a row for each user
  filteredData.forEach((user) => {
    console.log(user)
    const rowEl = document.createElement('tr')
    const nameEl = document.createElement('td')
    const emailEl = document.createElement('td')

    //set text content
    nameEl.textContent = user.name;
    emailEl.textContent = user.email;
    console.log(nameEl, emailEl)

    // append el to row
    rowEl.append(nameEl, emailEl);
    // append to tableBodyEl
    tableBodyEl.append(rowEl)
  })

  //append tbody to table
  tableEl.append(tableBodyEl)

  // append table to document
  document.querySelector('body').append(tableEl);
}