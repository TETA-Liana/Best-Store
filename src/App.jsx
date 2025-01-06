import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar';
import Home from './components/home';
import About from './components/aboutus';
import Products from './components/products';
import Contacts from './components/contacts';
import Login from './components/login';
import Signup from './components/signup';
import Loginas from './components/loginas';
import Homedash from './components/homedash';
import Sales from './components/sales';
import Progress from './components/progress';
import Settings from './components/settings';
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
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path='/homedash' element={<Homedash/>}/>
        <Route path="/sales" element={<Sales />} />
        <Route path='/progress' element={<Progress/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </Router>
  );
};

export default App;
