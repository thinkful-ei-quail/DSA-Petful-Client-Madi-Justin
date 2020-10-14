import config from '../config'

const PetApiService = {
  getPeople() {
    return fetch(`${config.API_ENDPOINT}/people`)
    .then(res => {
      return res.json();
    })
  },
  getPets() {
    return fetch(`${config.API_ENDPOINT}/pets`)
    .then(res => {
      return res.json();
    })
  },
  sendName(name) {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name: name })
    })
  },
  removeRandomPet(pet) {
    return fetch(`${config.API_ENDPOINT}/pets`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          pet: pet
        })
      })
      .then(res => {
        if(!res) {
          throw new Error('Something went wrong, try again')
        } else {
        return res.json()
        }
      })
  },
  removeFrontPerson() {
    return fetch(`${config.API_ENDPOINT}/people`,
          {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            }
          })
          .then(res => {
            if(!res) {
              throw new Error('Something went wrong, try again')
            }
          })
  },
  addRandomPerson(name) {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          name
        }
      )
    })
    .then(res => {
      if(!res) {
        throw new Error('Something went wrong, try again')
      } else {
        return res
      }
    })
  },
  dequeuePerson() {
    return fetch(`${config.API_ENDPOINT}/people`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res) {
        throw new Error('Something went wrong, try again')
      }
    })
  },
  dequeueAnimal(pet) {
    fetch(`${config.API_ENDPOINT}/pets`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          pet
        })
      })
      .then(res => {
        if(!res) {
          throw new Error('Something went wrong, try again')
        }
      })
  }
}

export default PetApiService