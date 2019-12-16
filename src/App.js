import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import ListAllCustomers from './components/Customers';
import ListAllTrainings from './components/Trainings'

import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
<header className="App-header">
      <Navigation />
      </header>
  <BrowserRouter>
  <Switch>
        <Route exact path="/" component={Home}/>
         <Route path="/trainings"component={ListAllTrainings}/>
        <Route path="/customers" component={ListAllCustomers}/>
        <Route render= {() => <h1>Page not found</h1>}/>
        </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
