import React from 'react';

import Nav from './components/navbar';
import Home from './components/home';
import About from './components/aboutus';
import Products from './components/products';
import Book from './components/book';
import Contacts from './components/contacts'


const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About/>
      <Products/>
      <Book/>
      <Contacts/>
      
    </div>
  );
};

export default App;