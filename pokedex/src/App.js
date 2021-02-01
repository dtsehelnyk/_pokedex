import React from 'react';
import { limit, item } from './api';
import { Cards } from './components/Cards/Cards';
import { Details } from './components/Details/Details';

import './App.scss';


export const App = () => {
  // console.log(limit);
  // console.log(item);

  return (
    <div className="App">
      <h1 className="App__title">Pokedex</h1>
      
      <main className="App__main">
        <Cards />
        <Details />
      </main>

    </div>
  );
}
