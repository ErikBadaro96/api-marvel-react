import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer'

import Home from './pages/Home';
import DetailsCharacters from './pages/DetailsCharacters'


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={DetailsCharacters} />
    </BrowserRouter>
    );
  }
  
export default App;
