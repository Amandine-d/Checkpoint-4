import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/AboutUs/AboutUs';
import Header from './Pages/Header/Header';
import './App.css';
import Footer from './Pages/Footer/Footer';
// import AdminProjects from './Pages/Admin/AdminProjects';
import AdminTestimonials from './Pages/Admin/AdminTestimonials';
// import AdminValidation from './Pages/Admin/Adminvalidation';

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
                <Route path="/admin" element={<AdminTestimonials />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
