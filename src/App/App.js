import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css'
import LandingPage from '../routes/LandingPage/LandingPage';
import AdoptionPage from '../routes/AdoptionPage/AdoptionPage';
import AppContext from '../contexts/contexts'
import config from '../../config';


class App extends Component {
  state = {
    pets: [],
    adopters: []
  }

  componentDidMount() {
    this.getPets()
    this.getAdopters()
  }
  
//   getPets = () => {
//     fetch(`${config.API_ENDPOINT}/pets/${id}`)
//       .then(res => res.json())
//       .then(pets => {
//         this.setState({pets})
//       })
//     }
  

//   clearStudents = () => {
//     this.setState({students:[]})
//   }

//   addStudent = (student) => {
//     this.setState({
//       students: [...this.state.students, student]
//     });
//   };

//   removeStudent = (studentId) => {
//     this.setState({
//       students: this.state.students.filter(student => student.id !== studentId),
//     });
//   };

  render() {
    const value = {
    //   students: this.state.students, 
    //   addStudent: this.addStudent,
    //   removeStudent: this.removeStudent,
    //   randomizeHouse: this.randomizeHouse,
    //   clearStudents: this.clearStudents,
    //   getStudents: this.getStudents,
    }
    return (
      <AppContext.Provider value={value}>
      <div className='App'>
        <Switch>
        <Route path= {'/'} component={LandingPage}/>
        <Route path={'/adoption'} component={AdoptionPage}/>
        </Switch>
      </div>
      </AppContext.Provider>
    );
  }
}

export default App;