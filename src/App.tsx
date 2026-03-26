import React from 'react';
import { NavbarSimple } from './components/NavBar';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-chalk">
      <NavbarSimple />
      <main>
        <Hero />
        <About />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}

export default App;
