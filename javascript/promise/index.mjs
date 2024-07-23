import fetch from 'node-fetch';

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
};

fetchData();