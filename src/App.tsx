import React from 'react';
import { NavbarSimple } from './components/NavBar';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <NavbarSimple />
      <main className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <Hero />
        <About />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}

export default App;
