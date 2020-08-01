/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
import config from '../config';

const URL_CAEGORIES = `${config.URL}/categorias`;

function getAll() {
  return fetch(`${URL_CAEGORIES}`)
    .then(async (ServResponse) => {
      if (ServResponse.ok) {
        const response = await ServResponse.json();
        return response;
      }

      throw new Error('Não foi possível pegar os dados.');
    });
}
function getAllWithVideos() {
  return fetch(`${URL_CAEGORIES}?_embed=videos`)
    .then(async (ServResponse) => {
      if (ServResponse.ok) {
        const response = await ServResponse.json();
        return response;
      }

      throw new Error('Não foi possível pegar os dados.');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
