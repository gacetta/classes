function fetchFunc(url) {
  // set up XHR
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
    } else if (e.target.readyState === 4) {
    console.log('An error has occurred');
    }
  })

  request.open('GET', url);
  request.send();

  // return new Promise({
  //   status: pending,
  //   value: undefined,
  //   onFulfilled: [],
  //   onRejected: []
  // });

}