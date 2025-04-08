import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Coursework from './components/Coursework';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar/>
      <Header />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Coursework />
      <Footer />
    </div>
  );
}

export default App;