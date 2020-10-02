import config from '../config';

const PetApiService = {
  getPets() {
    return fetch(`${config.API_ENDPOINT}/hangar`, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getPeople() {
    return fetch(`${config.API_ENDPOINT}/hangar`, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}