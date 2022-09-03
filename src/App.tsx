import React from 'react';
import './App.css';
import { Aboutus } from './components/Aboutus/Aboutus';
import { Campaign } from './components/Campaign/Campaign';
import { Contactus } from './components/Contactus/Contactus';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Campaign/>
      <Aboutus/>
      <Contactus/>
    </div>
  );
}

export default App;
