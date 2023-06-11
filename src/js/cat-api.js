function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds`;
  const api_key =
    ' live_AqVAdbSI3iq6qvheU2btDbPvPUx4FhPf0KO84Ew4BtwLMszLCefwpjCjD6X1ksjH';
  let storedBreeds = [];

  return fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      //filter to only include those with an `image` object
      storedBreeds = data.map(e => e.name);
      console.log(storedBreeds);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default fetchBreeds;
