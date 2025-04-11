import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Contacto from './pages/Contacto.jsx'

const App = () => (
    <Router>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        <Footer/>
    </Router>
);

export default App;
