import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Login from './components/login/Login';
import Cart from './components/cart/Cart';
import Seller from './components/seller/Seller';
import Settings from './components/settings/Settings';

const App = () => {

    return (
        <>
            {/* <LoadingBar color='#f11946' ref={ref} /> */}
            <Router>
                <Routes>
                    <Route path='/' element={<Header />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/seller' element={<Seller />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </Router>
        </>
    )
};

export default App;