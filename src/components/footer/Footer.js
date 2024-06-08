import React, { } from 'react';
import { Card } from "@mui/material";
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <Card style={{ backgroundColor: "lightgrey" }}>
                    {/* <p style={{ paddingBottom: 10, fontSize: 18 }}>Footer</p> */}
                    <p className='footer-p'>This Clone was Developed By<b> Vraj Chovatiya</b> in January,24</p>
                </Card>
            </div>
        </>
    )
};

export default Footer;