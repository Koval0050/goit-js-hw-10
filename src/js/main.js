import fetchBreeds from './cat-api';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds();

// function showSelect(massName) {
//   const option = massName.map(e => {
//     return `<option id="${e.id}" value="${e.name}">${e.name}</option>`;
//   });
//   return option;
// }
// data = data.filter(img => img.image?.url != null);
// storedBreeds = data;
// console.log(storedBreeds);
// const showSelectName = showSelect(storedBreeds);
// refs.breedSelect.insertAdjacentHTML('beforeend', showSelectName);
