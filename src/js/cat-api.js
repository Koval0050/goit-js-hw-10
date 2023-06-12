let BASE_URL = `https://api.thecatapi.com/v1/breeds`;
const OPTIONS = {
  'x-api-key':
    ' live_AqVAdbSI3iq6qvheU2btDbPvPUx4FhPf0KO84Ew4BtwLMszLCefwpjCjD6X1ksjH',
};

export const fetchBreeds = () => {
  return fetch(BASE_URL, OPTIONS).then(response => {
    if (!response.ok) {
      throw new Error(console.error('Internet problems?'));
    }
    return response.json();
  });
};

export const fetchCatByBreed = breedId => {
  const BASE_URL = `https://api.thecatapi.com/v1/breeds/${breedId}`;

  return fetch(BASE_URL, OPTIONS).then(response => {
    if (!response.ok) {
      throw new Error(console.error('Try reloading the page!'));
    }
    return response.json();
  });
};
