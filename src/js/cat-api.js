const BASE_URL = `https://api.thecatapi.com/v1`;
const API_KEY =
  ' live_AqVAdbSI3iq6qvheU2btDbPvPUx4FhPf0KO84Ew4BtwLMszLCefwpjCjD6X1ksjH';

export const fetchBreeds = () => {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};

export const fetchCatByBreed = breedId => {
  return fetch(
    `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};
