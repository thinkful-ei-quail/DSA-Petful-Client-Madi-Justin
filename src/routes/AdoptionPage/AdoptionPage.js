import React from 'react'
import './AdoptionPage.css'
// import config from '../../config'
import People from '../../components/People/People';
import Pets from '../../components/Pets/Pets';
import EnterQueue from '../../components/EnterQueue/EnterQueue'
import AdoptButtons from '../../components/AdoptButtons/AdoptButtons';
import Confirmation from '../../components/Confirmation/Confirmation';
import PetApiService from '../../Services/pet-api-service';
import randomUsers from '../../random-users';

export default class MainPage extends React.Component {
  state = {
    pets: {},
    people: [],
    name: '',
    adopted: ''
  }

  componentDidMount = () => {
    this.getPeople()
    this.getPets();
    this.dequeuePeople()
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
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

  handleNameChange = (e) => {
    this.setState({
      name: e.value
    })
  }

  handleNameSubmit = (e) => {
    e.preventDefault()
    PetApiService.sendName(this.state.name)
      .then(res => res.json())
      .then(resJson => {
        window.localStorage.setItem('petful_username', resJson)
        console.log(window.localStorage.getItem('petful_username'));
        this.setState({
          people: [...this.state.people, resJson],
          name: ''
        })
      })
  }

  dequeuePeople = () => {
    this.interval = setInterval(() => {
      //If current user is in front or there are no more in queue
      if ((window.localStorage.getItem('petful_username') !== this.state.people[0]) &&
        this.state.people.length > 0) {

        let randomPet = ['cats', 'dogs'][Math.floor(Math.random() * 2)]
          Promise.all([PetApiService.removeRandomPet(randomPet), PetApiService.removeFrontPerson()])
            .then(() => {
              if(randomPet === 'cats') {
              this.setState({
                pets: {
                  cat: [...this.state.pets.cat.slice(1)],
                  dog: [...this.state.pets.dog]
                },
                people: this.state.people.slice(1)
              })
            } else if(randomPet === 'dogs') {
              this.setState({
                pets: {
                  cat: [...this.state.pets.cat],
                  dog: [...this.state.pets.dog.slice(1)]
                },
                people: this.state.people.slice(1)
              })
            }
            })
            .catch( e => {
                console.log(e)
              })
      }
      else if (this.state.people.length < 5) {
        let randomPerson = randomUsers[Math.floor((Math.random() * 10))]

        PetApiService.addRandomPerson(randomPerson)
          .then(() => {
              this.setState({
                people: [...this.state.people, randomPerson]
              })
            }
          )
          .catch(e => console.log(e))
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

    if(pet === 'cat') {
    this.setState({
      adopted: '',
      pets: {
        cat: [...this.state.pets.cat.slice(1)],
        dog: [...this.state.pets.dog]
      },
      people: this.state.people.slice(1)
    })
  } else if(pet === 'dog') {
    this.setState({
      adopted: '',
      pets: {
        cat: [...this.state.pets.cat],
        dog: [...this.state.pets.dog.slice(1)]
      },
      people: this.state.people.slice(1)
    }) 
  } else if(pet === 'cat and dog') {
    this.setState({
      adopted: '',
      pets: {
        cat: [...this.state.pets.cat.slice(1)],
        dog: [...this.state.pets.dog.slice(1)]
      },
      people: this.state.people.slice(1)
    })
  }

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
    PetApiService.dequeuePerson()
  }

  dequeueAnimal = (pet) => {
    PetApiService.dequeueAnimal(pet)
  }

  render() {
    const { people, pets, adopted } = this.state;
    return (
      <div className='Main-Page'>
        <h1>Pet Adoption Listing</h1>
        <Pets pets={pets} />
        <div className='People'>
          {window.localStorage.getItem('petful_username') === this.state.people[0]
            && <AdoptButtons
              adoptCat={this.adoptCat}
              adoptDog={this.adoptDog}
              adoptBoth={this.adoptBoth}
            />}
          <EnterQueue name={this.state.name} handleSubmit={this.handleNameSubmit} handleChange={this.handleNameChange} />
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
