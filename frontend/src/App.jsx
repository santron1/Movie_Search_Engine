import React from 'react';
import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import {Route,Routes} from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    <>
    <MovieProvider>
    <div>
      <NavBar/>
      <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
      </main>
      </div>
    </MovieProvider>
    </>
  )
}

export default App
