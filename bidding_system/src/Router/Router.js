
import React from 'react'
import LoginForm from '../Screens/Login/index';
import Bidding from '../Screens/BidState';
import Material from '../Screens/MeterialPackages';
import Consumeable from '../Screens/ConsumablePackages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function path() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/Bidding" element={<Bidding />} />
                    <Route path="/Material" element={<Material />} />
                    <Route path="/Consumable" element={<Consumeable />} />
                    <Route path="/" element={<LoginForm />} />
                </Routes>
            </Router>
        </>

    );
}

export default path;