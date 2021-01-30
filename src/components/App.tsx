import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {CountryList} from 'pages/CountryList/CountryList';
import './App.scss';
import { CountryDetails } from 'pages/CountryDetails/CountryDetails';

const App = () => {
  return (
    <div className="app">
      <div className="app-blue-background" />
      <div className="app-content">
        <BrowserRouter>
          <Route path="/" component={CountryList} exact />
          <Route path="/:country" component={CountryDetails} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
