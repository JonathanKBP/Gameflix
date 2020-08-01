/* eslint-disable linebreak-style */
export const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://gameflix-kevin.herokuapp.com/';

export default {
  URL,
};
