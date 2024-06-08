import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import Logo from '../../assets/logo.jpg';
import "./header.css";
import Carousel from '../carousel/Carousel';
import Categories from '../categories/Categories';
import Products from '../products/Products';
import MoreProducts from '../products/MoreProducts';
import Footer from '../footer/Footer';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Products from '../products/Products';
import ProductsDetails from '../products/ProductsDetails';

const Header = () => {

    const [prog, setProgress] = useState(0);

    return (
        <>
            <div>
                {/* <LoadingBar
                    color='#f11946'
                    strokeWidth='10'
                    height={10}
                    progress={prog}
                    onLoaderFinished={() => setProgress(0)}
                /> */}
                <Card className='header-card' sx={{ borderRadius: 0, boxShadow: 0, padding: '6px' }}>
                    <img src={Logo} alt="logo" className='logo' />
                    <input type="text" name="search" placeholder='Search for Products, Brands and More'></input>

                    <Link to="/login" className='login'>
                        <PersonIcon></PersonIcon>
                        <h2>Login</h2>
                    </Link>
                    <Link to="/cart" className='cart' onClick={() => setProgress(50)}>
                        <AddShoppingCartIcon></AddShoppingCartIcon>
                        <h2>Cart</h2>
                    </Link>
                    <Link to="/seller" className='store'>
                        <StoreIcon></StoreIcon>
                        <h2>become a Seller</h2>
                    </Link>
                    <Link to="/settings" className='setting'>
                        <SvgIcon>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className='setting'
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                                />
                            </svg>
                        </SvgIcon>
                    </Link>
                </Card>
            </div>
            {/* <section> */}
            <Carousel />
            <Categories />
            <Products  />
            <Products  />
            {/* <Router>
                <Routes>
                    <Route exact path="/" component={Products} />
                    <Route path="/product/:id" component={ProductsDetails} />
                </Routes>
            </Router> */}
            <MoreProducts />
            <Footer />
            {/* </section> */}
        </>
    )
};

export default Header;