import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css'
import Fiche from './pages/Fiche';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="/about" element={<About/>} />
      < Route path="/logement/:id" element={<Fiche />}/>
      {/* path='*' le * se dit ALL fonctionne si jamais l'url ne correspond à rien de déclaré au dessus
      ça nous renvoi donc à la page d'accueil mais ça aurait pu être une page 404 */}
      < Route path="*" element={<NotFound/>} />
    </Routes>

    </BrowserRouter>
  );
};

export default App;