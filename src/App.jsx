import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar';
import Home from './components/home';
import About from './components/aboutus';
import Products from './components/products';
import Contacts from './components/contacts';
import Login from './components/login';
import Signup from './components/signup'; // Assuming you have a signup component
import Loginas from './components/loginas';
import layout from './components/layout';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/loginas" element={<Loginas/>} />
        <Route path='/login' element={<Layout/>}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
