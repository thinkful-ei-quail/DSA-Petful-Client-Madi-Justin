import config from '../config';

const PetApiService = {
  
  postName(nameQueue) {
    fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: nameQueue
    })
      .then(res => res.json())
  },
  getPets() {
    return fetch(`${config.API_ENDPOINT}/pets`)
      .then(res => {
        return res.json();
      })
  },
  getPeople() {
    return fetch(`${config.API_ENDPOINT}/people`)
      .then(res => {
        return res.json();
      })
  }
}

export default PetApiService;