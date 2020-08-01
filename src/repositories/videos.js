/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (ServResponse) => {
      if (ServResponse.ok) {
        const response = await ServResponse.json();
        return response;
      }

      throw new Error('Não foi possível pegar os dados.');
    });
}

export default {
  create,
};
