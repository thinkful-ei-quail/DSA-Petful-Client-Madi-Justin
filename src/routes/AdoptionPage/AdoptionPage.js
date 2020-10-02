import React from 'react'
import './AdoptionPage.css'
import config from '../../config'
import People from '../../components/People/People';
import Pets from '../../components/Pets/Pets';
import EnterQueue from '../../components/EnterQueue/EnterQueue'

export default class MainPage extends React.Component {
  state = {
    pets: {},
    people: [],
    name: ''
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
      body: JSON.stringify({name: this.state.name})
    })
    .then(res => res.json())
    .then(resJson => {
      this.setState({
        people: [...this.state.people, resJson],
      })
      window.localStorage.setItem('petful_username', resJson)
    })
  }

  componentDidMount = () => {
    this.getPeople();
    this.getPets();
  }

  getPeople = () => {
    fetch(`${config.API_ENDPOINT}/people`)
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({
          people: resJson
        })
      })
  }

  getPets = () => {
    fetch(`${config.API_ENDPOINT}/pets`)
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({
          pets: resJson
        });
      })
  }

  dequeuePeople = () => {
    setInterval(console.log('interval'), 5000)
  }

  render() {
    const {people, pets} = this.state;
    return (
      <div className='Main-Page'>
        <EnterQueue handleSubmit={this.handleNameSubmit} handleChange={this.handleNameChange}/>
        <Pets pets={pets}/>
        <People people={people}/>
      </div>
    )
  }
}


// const AdoptionPage = (props) => {
//   const handleStart = () => {
//     const {history} = props 
//     history.push('./adoption')
//   }

//   return (
//     <div>
//       <section className="adoption-info">
//         <h1>Welcome to the adoption queue.</h1>
//       <button className="adopt-button" onClick={() => handleStart()}>Adopt a Pet</button>
//       </section>
//     </div>
//     )
//   }


// export default AdoptionPage
