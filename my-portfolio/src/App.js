import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <TechStack />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;