import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Header from './Pages/Header/Header';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home /> <Services />{' '}
                        </>
                    }
                />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <footer className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </footer>
        </div>
    );
}

export default App;
