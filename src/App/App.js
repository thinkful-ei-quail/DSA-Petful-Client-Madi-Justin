import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css'
import LandingPage from '../routes/LandingPage';
import AdoptionPage from '../routes/AdoptionPage';
import AppContext from '../contexts/contexts'
import config from "../config"
// import TokenService from '../services/token-service'



class App extends Component {
//   state = {
//     students: []
//   }

//   componentDidMount() {
//     this.getStudents()
//   }
  
//   getStudents = () => {
//     if(TokenService.hasAuthToken()) {
//       const id = TokenService.readJwtToken().user_id
//       console.log(id)
//       fetch(`${config.API_ENDPOINT}/students/users/${id}`)
//       .then(res => res.json())
//       .then(students => {
//         this.setState({students})
//       })
//     }
//   }

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
        <Route exact path = '/' component = {LandingPage}/>
        <Route path={'/adoption'} component={AdoptionPage}/>
        </Switch>
      </div>
      </AppContext.Provider>
    );
  }
}

export default App;