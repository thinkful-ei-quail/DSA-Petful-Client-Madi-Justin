import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css'
import LandingPage from '../routes/LandingPage/LandingPage';
import AdoptionPage from '../routes/AdoptionPage/AdoptionPage';
// import AppContext from '../contexts/contexts'

class App extends Component {

  render() {
    return (
      <div className='App'>
          <Switch>
              <Route exact path= {'/'} component={LandingPage}/>
              <Route path={'/adoption'} component={AdoptionPage}/>
          </Switch>
      </div>
    );
  }
}

export default App;