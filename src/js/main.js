import { fetchBreeds, fetchCatByBreed } from './cat-api';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};
refs.breedSelect.addEventListener('change', e => {
  // Hide any previous error message
  refs.error.classList.remove('visible');

  // Show the loader
  refs.loader.classList.add('visible');
  refs.catInfo.classList.add('el_disp_none');

  const optionValue = e.target.options[e.target.selectedIndex].value;
  fetchCatByBreed(optionValue)
    .then(data => {
      const selectCat = {
        name: data.name,
        temperament: data.temperament,
        description: data.description,
        imgAlt: data.alt_names,
        img: data.reference_image_id,
      };
      return selectCat;
    })
    .then(({ name, temperament, description, imgAlt, img }) => {
      const cat = `<div class = "container"><h2>${name || 'cat name'}</h2>
    <p><b>Temperament: </b>${temperament}</p>
    <img src="https://cdn2.thecatapi.com/images/${img}.jpg" width="500" alt="${
        imgAlt || 'cat'
      }">
    <p>${description || 'description'}</p></div>`;
      refs.catInfo.classList.remove('el_disp_none');

      refs.catInfo.innerHTML = cat;
    })
    .catch(error => {
      alert(
        'Упс, схоже виникла помилка, спробуйте перезавантажити сторінку, якщо це не допоможе то спробуйте обрати іншого котика'
      );
      refs.catInfo.classList.add('el_disp_none');

      // Show the error message
      refs.error.classList.add('visible');
    })
    .finally(() => {
      // Hide the loader
      refs.loader.classList.remove('visible');
    });
});

// Show the loader when fetching the breed list
refs.loader.classList.add('visible');

fetchBreeds()
  .then(data => {
    // filter to only include those with an `image` object
    storedBreeds = data.map(e => {
      const nameId = { name: e.name, id: e.id };
      return nameId;
    });
    return storedBreeds;
  })
  .then(data => {
    const option = showSelect(data);
    refs.breedSelect.classList.remove('el_disp_none');
    refs.breedSelect.insertAdjacentHTML('beforeend', option.join(''));
  })
  .catch(error => {
    alert(
      'Упс, схоже сайт не працює або у вас проблеми з інтернетом, спробуйте перезавантажити сторінку'
    );
    refs.loader.classList.remove('visible');
  })
  .finally(() => {
    // Hide the loader
    refs.loader.classList.remove('visible');
    // Show the breed select
  });

function showSelect(massName) {
  const option = massName.map(e => {
    return `<option value="${e.id}">${e.name}</option>`;
  });
  return option;
}
