import axios from "axios";

// Its an spical url so store it in var
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  // This is the function which allow us to call this API by pass dynamic url
  // and then call it from within any component in our application.
  export const fetchFromAPI = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    const {data} = response;    // destructuing the data
    return data;
  }