import React from 'react'
import './AdoptionPage.css'
import config from '../../config'
import People from '../../components/People/People';
import Pets from '../../components/Pets/Pets';
import EnterQueue from '../../components/EnterQueue/EnterQueue'
import AdoptButtons from '../../components/AdoptButtons/AdoptButtons';
import Confirmation from '../../components/Confirmation/Confirmation';
import PetApiService from '../../Services/pet-api-service'

export default class MainPage extends React.Component {
  state = {
    pets: {},
    people: [],
    name: '',
    adopted: ''
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.value
    })
  }

  handleNameSubmit = (e) => {
    e.preventDefault()
    fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name: this.state.name })
    })
      .then(res => res.json())
      .then(resJson => {
        window.localStorage.setItem('petful_username', resJson)
        console.log(window.localStorage.getItem('petful_username'));
        this.setState({
          people: [...this.state.people, resJson],
        })
      })
  }

  componentDidMount = () => {
    this.getPeople();
    this.getPets();
    this.dequeuePeople();
  }

  getPeople = () => {
    PetApiService.getPeople()
      .then(resJson => {
        this.setState({
          people: resJson
        })
      })
  }

  getPets = () => {
    PetApiService.getPets()
      .then(resJson => {
        this.setState({
          pets: resJson
        });
      })
  }

  dequeuePeople = () => {
    const randomUsers = [
      'Raakel Atkinson',
      'Shazia Cokes',
      'Laura Krückel',
      'Marietta Lund',
      'Eddy Kuntz',
      'Nina Abelen',
      'Samuel Barnes',
      'Osane PPorter',
      'Seo-Yun Anjali Roach',
      "Emīls Agnes O'Mooney"
    ]
    setInterval(() => {
      //If current user is in front or there are no more in queue
      if ((window.localStorage.getItem('petful_username') !== this.state.people[0]) &&
        this.state.people.length > 0) {
        let randomPet = ['cats', 'dogs'][Math.floor(Math.random() * 2)]

        fetch(`${config.API_ENDPOINT}/pets`,
          {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              pet: randomPet
            })
          })


        fetch(`${config.API_ENDPOINT}/people`,
          {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            }
          })
          .then(res => {
            this.setState({
              people: this.state.people.slice(1, this.state.people.length)
            })
          })
          .then(() => {
            this.getPets();
          })
      }
      else if (this.state.people.length < 5) {
        fetch(`${config.API_ENDPOINT}/people`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(
            {
              name: randomUsers[Math.floor((Math.random() * 4))]
            }
          )
        })
          .then(res => res.json())
          .then(resJSON => {
            this.setState({
              people: [...this.state.people, resJSON]
            })
          });
      }
    }, 5000)
  }

  closeConfirmation = (pet) => {
    if(pet === 'cat and dog') {
      this.dequeueAnimal('dogs')
      this.dequeueAnimal('cats')
    } else {
      let plural = pet + 's'
      this.dequeueAnimal(plural)
    }
    this.dequeuePerson()
    this.setState({
      adopted: ''
    })

  }

  adoptCat = () => {
    this.setState({
      adopted: 'cat'
    })
  }

  adoptDog = () => {
    this.setState({
      adopted: 'dog'
    })
  }

  adoptBoth = () => {
    this.setState({
      adopted: 'cat and dog'
    })
  }

  dequeuePerson = () => {
    fetch(`${config.API_ENDPOINT}/people`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        this.setState({
          people: this.state.people.slice(1, this.state.people.length)
        })
      })
      .then(() => {
        this.getPets();
      })
  }

  dequeueAnimal = (pet) => {
    console.log(pet)
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
  }

  render() {
    const { people, pets, adopted } = this.state;
    return (
      <div className='Main-Page'>
        <h1>Pet Adoption Listing</h1>
        <Pets pets={pets} />
        <div className="People">
          {window.localStorage.getItem('petful_username') === this.state.people[0]
            && <AdoptButtons
              adoptCat={this.adoptCat}
              adoptDog={this.adoptDog}
              adoptBoth={this.adoptBoth}
            />}

          <EnterQueue handleSubmit={this.handleNameSubmit} handleChange={this.handleNameChange} />
          {adopted 
            && <Confirmation 
              petType={adopted} 
              handleClose={this.closeConfirmation}
              dequeuePerson={this.dequeuePerson}
              dequeueAnimal={this.dequeueAnimal}
              />}
          <People people={people} />
        </div>
      </div>
    )
  }
}