const fetchBreeds = () => {
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
      // console.log(data);
      //filter to only include those with an `image` object
      storedBreeds = data.map(e => {
        const nameId = { name: e.name, id: e.id };
        return nameId;
      });
      return storedBreeds;
    });
};

const fetchCatByBreed = breedId => {
  const api_key =
    ' live_AqVAdbSI3iq6qvheU2btDbPvPUx4FhPf0KO84Ew4BtwLMszLCefwpjCjD6X1ksjH';
  const url = `https://api.thecatapi.com/v1/breeds/${breedId}`;

  return fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      const selectCat = {
        name: data.name,
        temperament: data.temperament,
        description: data.description,
        imgAlt: data.alt_names,
        img: data.reference_image_id,
      };
      return selectCat;
    });
};

export { fetchBreeds, fetchCatByBreed };
