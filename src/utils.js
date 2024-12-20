import axios from 'axios';

// Function to perform a GET request to a given URL
const getAll = (url) => axios.get(url);

export { getAll };
